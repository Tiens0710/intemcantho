# API Documentation - v1

## Endpoints

### GET `/api/v1/homepage`
Fetch homepage data including recommendations, featured products, testimonials, and process steps.

**Response:**
```json
{
  "status": "success",
  "data": {
    "recommendedProducts": [...],
    "featuredProducts": [...],
    "testimonials": [...],
    "processSteps": [...]
  }
}
```

---

### GET `/api/v1/products`
Fetch all products with optional category filter.

**Query Parameters:**
- `category` (optional): Filter by category slug (e.g., `office-products`, `labels`)

**Response:**
```json
{
  "status": "success",
  "data": {
    "products": [...],
    "total": 15
  }
}
```

---

### GET `/api/v1/products/[id]`
Fetch a single product by ID.

**Path Parameters:**
- `id`: Product ID

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": "brochure-1",
    "title": "...",
    "description": "...",
    "category": "...",
    "image": "...",
    "price": "...",
    "personas": [...],
    "featured": true
  }
}
```

**Error Response (404):**
```json
{
  "status": "error",
  "message": "Product not found"
}
```

---

### GET `/api/v1/categories`
Fetch all product categories.

**Response:**
```json
{
  "status": "success",
  "data": {
    "categories": [
      { "slug": "office-products", "name": "Office Products", "count": 5 },
      { "slug": "labels", "name": "Labels", "count": 3 }
    ],
    "total": 2
  }
}
```

---

### GET `/api/v1/settings/public`
Fetch public site settings and configuration.

**Response:**
```json
{
  "status": "success",
  "data": {
    "siteName": "Intem Cần Thơ",
    "siteUrl": "http://localhost:3000",
    "logo": "/logo.png",
    "description": "In ấn chất lượng cao, dịch vụ chuyên nghiệp",
    "contact": {
      "phone": "+84 (0)292 3 999 999",
      "email": "info@intem.vn",
      "address": "Cần Thơ, Việt Nam"
    },
    "socialLinks": {
      "facebook": "https://facebook.com/intemcanho",
      "instagram": "https://instagram.com/intemcanho"
    },
    "features": {
      "hasCart": true,
      "hasCheckout": false,
      "hasPayment": false
    }
  }
}
```

---

## Data Source

All endpoints fetch data from `lib/wordpress.ts` which contains mock data. To integrate with a real backend, update the data fetching logic in the respective route handlers.

## Status Codes

- `200 OK`: Success
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error
