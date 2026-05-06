import express, { Request, Response } from 'express';
import { db } from './_core/db';
import { ENV } from './_core/env';

const router = express.Router();

// Simple password hashing (in production, use bcrypt)
function hashPassword(password: string): string {
  const crypto = require('crypto');
  const secret = ENV.cookieSecret || 'default-secret';
  return crypto.createHash('sha256').update(password + secret).digest('hex');
}

// Simple JWT token generation (in production, use jsonwebtoken)
function generateToken(userId: number): string {
  const crypto = require('crypto');
  const secret = ENV.cookieSecret || 'default-secret';
  const payload = JSON.stringify({ userId, iat: Date.now() });
  const signature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return Buffer.from(`${payload}.${signature}`).toString('base64');
}

// Register endpoint
router.post('/api/auth/register', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if user already exists
    const existingUser = await db.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = hashPassword(password);

    // Create user
    const result = await db.query(
      `INSERT INTO users (first_name, last_name, email, password_hash, phone)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, email, first_name, last_name, created_at`,
      [firstName, lastName, email, hashedPassword, phone]
    );

    res.status(201).json({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login endpoint
router.post('/api/auth/login', async (req: Request, res: Response) => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Find user
    const result = await db.query(
      'SELECT id, email, first_name, last_name, password_hash FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const hashedPassword = hashPassword(password);

    if (user.password_hash !== hashedPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const token = generateToken(user.id);

    // Update last login
    await db.query(
      'UPDATE users SET last_login = NOW() WHERE id = $1',
      [user.id]
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Logout endpoint
router.post('/api/auth/logout', async (req: Request, res: Response) => {
  try {
    res.json({ success: true, message: 'Logged out' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Logout failed' });
  }
});

// Get current user endpoint
router.get('/api/auth/me', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Decode token (simplified)
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    const userId = decoded.userId;

    const result = await db.query(
      'SELECT id, email, first_name, last_name, phone, created_at FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Update user profile endpoint
router.put('/api/auth/profile', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    const userId = decoded.userId;

    const { firstName, lastName, phone } = req.body;

    const result = await db.query(
      `UPDATE users 
       SET first_name = $1, last_name = $2, phone = $3, updated_at = NOW()
       WHERE id = $4
       RETURNING id, email, first_name, last_name, phone`,
      [firstName, lastName, phone, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Update failed' });
  }
});

// Change password endpoint
router.post('/api/auth/change-password', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    const userId = decoded.userId;

    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Missing password fields' });
    }

    // Verify current password
    const result = await db.query(
      'SELECT password_hash FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedCurrentPassword = hashPassword(currentPassword);
    if (result.rows[0].password_hash !== hashedCurrentPassword) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    // Update password
    const hashedNewPassword = hashPassword(newPassword);
    await db.query(
      'UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2',
      [hashedNewPassword, userId]
    );

    res.json({ success: true, message: 'Password changed' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Change password failed' });
  }
});

export default router;
