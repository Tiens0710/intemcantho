import express, { Request, Response } from 'express';
import multer from 'multer';
import { db } from './_core/db';
import { storagePut, storageGet } from './_core/storage';

const router = express.Router();

// Configure multer for file uploads (store in memory)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB max
  },
  fileFilter: (_req: any, file: any, cb: any) => {
    // Allow common image and document formats
    const allowedMimes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/gif',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
});

// Upload file endpoint
router.post('/api/files/upload', upload.single('file'), async (req: any, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const { originalname, mimetype, size, buffer } = req.file || {};
    const filename = `${Date.now()}-${originalname}`;
    const relKey = `uploads/${filename}`;

    // Upload to S3
    const { url, key } = await storagePut(relKey, buffer, mimetype);

    // Save file metadata to database
    const result = await db.query(
      `INSERT INTO files (filename, original_name, file_type, file_size, s3_key, s3_url, uploaded_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, filename, s3_url, created_at`,
      [filename, originalname, mimetype, size, key, url, req.user?.id || null]
    );

    res.json({
      success: true,
      file: result.rows[0],
    });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
});

// Get file URL endpoint
router.get('/api/files/:fileId', async (req: Request, res: Response) => {
  try {
    const { fileId } = req.params;

    const result = await db.query(
      'SELECT id, filename, s3_key, s3_url, file_type, file_size FROM files WHERE id = $1',
      [fileId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'File not found' });
    }

    const file = result.rows[0];

    // Get presigned URL if needed
    if (!file.s3_url) {
      const { url } = await storageGet(file.s3_key);
      file.s3_url = url;
    }

    res.json(file);
  } catch (error) {
    console.error('File retrieval error:', error);
    res.status(500).json({ error: 'File retrieval failed' });
  }
});

// List files endpoint
router.get('/api/files', async (req: Request, res: Response) => {
  try {
    const { limit = 20, offset = 0 } = req.query;

    const result = await db.query(
      `SELECT id, filename, original_name, file_type, file_size, s3_url, created_at
       FROM files
       ORDER BY created_at DESC
       LIMIT $1 OFFSET $2`,
      [parseInt(limit as string), parseInt(offset as string)]
    );

    const countResult = await db.query('SELECT COUNT(*) as total FROM files');

    res.json({
      files: result.rows,
      total: parseInt(countResult.rows[0].total),
    });
  } catch (error) {
    console.error('Files list error:', error);
    res.status(500).json({ error: 'Failed to list files' });
  }
});

// Delete file endpoint
router.delete('/api/files/:fileId', async (req: Request, res: Response) => {
  try {
    const { fileId } = req.params;

    const result = await db.query(
      'SELECT s3_key FROM files WHERE id = $1',
      [fileId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'File not found' });
    }

    const { s3_key } = result.rows[0];

    // Delete from S3 (if storage supports it)
    // await storageDelete(s3_key);

    // Delete from database
    await db.query('DELETE FROM files WHERE id = $1', [fileId]);

    res.json({ success: true, message: 'File deleted' });
  } catch (error) {
    console.error('File deletion error:', error);
    res.status(500).json({ error: 'File deletion failed' });
  }
});

// Get products endpoint
router.get('/api/products', async (req: Request, res: Response) => {
  try {
    const { category, limit = 20, offset = 0 } = req.query;

    let query = 'SELECT * FROM products';
    const params: any[] = [];

    if (category) {
      query += ' WHERE category = $1';
      params.push(category);
    }

    query += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
    params.push(parseInt(limit as string), parseInt(offset as string));

    const result = await db.query(query, params);

    res.json({
      products: result.rows,
    });
  } catch (error) {
    console.error('Products retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// Create product endpoint
router.post('/api/products', async (req: Request, res: Response) => {
  try {
    const { name, description, category, image_url, price } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Product name is required' });
    }

    const result = await db.query(
      `INSERT INTO products (name, description, category, image_url, price)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, description, category, image_url, price, created_at`,
      [name, description, category, image_url, price]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Product creation error:', error);
    res.status(500).json({ error: 'Product creation failed' });
  }
});

// Contact form submission endpoint
router.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const result = await db.query(
      `INSERT INTO contact_submissions (name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, email, created_at`,
      [name, email, phone, subject, message]
    );

    res.status(201).json({
      success: true,
      message: 'Contact submission received',
      submission: result.rows[0],
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Contact submission failed' });
  }
});

// Get orders endpoint
router.get('/api/orders', async (req: Request, res: Response) => {
  try {
    const { status, limit = 20, offset = 0 } = req.query;

    let query = 'SELECT * FROM orders';
    const params: any[] = [];

    if (status) {
      query += ' WHERE status = $1';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
    params.push(parseInt(limit as string), parseInt(offset as string));

    const result = await db.query(query, params);

    res.json({
      orders: result.rows,
    });
  } catch (error) {
    console.error('Orders retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
});

// Create order endpoint
router.post('/api/orders', async (req: Request, res: Response) => {
  try {
    const { customer_name, customer_email, customer_phone, items, notes } = req.body;

    if (!customer_name || !items || items.length === 0) {
      return res.status(400).json({ error: 'Customer name and items are required' });
    }

    // Generate order number
    const orderNumber = `ORD-${Date.now()}`;

    // Calculate total
    const total = items.reduce((sum: number, item: any) => sum + (item.unit_price * item.quantity), 0);

    // Insert order
    const orderResult = await db.query(
      `INSERT INTO orders (order_number, customer_name, customer_email, customer_phone, total_amount, notes)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, order_number, customer_name, total_amount, created_at`,
      [orderNumber, customer_name, customer_email, customer_phone, total, notes]
    );

    const orderId = orderResult.rows[0].id;

    // Insert order items
    for (const item of items) {
      await db.query(
        `INSERT INTO order_items (order_id, product_id, quantity, unit_price)
         VALUES ($1, $2, $3, $4)`,
        [orderId, item.product_id, item.quantity, item.unit_price]
      );
    }

    res.status(201).json({
      success: true,
      order: orderResult.rows[0],
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ error: 'Order creation failed' });
  }
});

export default router;
