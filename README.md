# 🛒 E-Commerce Web Application

A full-stack e-commerce web application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It features a customer-facing storefront, a dedicated admin dashboard, and a RESTful backend API — all deployed and live.

🔗 **Live Demo:**
Frontend:[e-commerce-frontend-kappa-self.vercel.app](https://e-commerce-frontend-kappa-self.vercel.app)

AdminPanel:https://e-commerce-admin-ashy-zeta.vercel.app

---

## 📁 Project Structure

```
e-commerce/
├── frontend/       # React.js customer-facing storefront
├── admin/          # React.js admin dashboard
└── backend/        # Node.js + Express.js REST API
```

---

## ✨ Features

### 🧑‍💻 Customer Storefront
- Browse and search products
- Product detail pages
- Shopping cart (add, update, remove items)
- User registration and login (JWT authentication)
- Checkout and order placement
- Order history and tracking

### 🔧 Admin Dashboard
- Manage products (Create, Read, Update, Delete)
- View and manage all customer orders
- Update order status (pending → delivered)
- User management

### ⚙️ Backend API
- RESTful API with Express.js
- MongoDB database with Mongoose ODM
- JWT-based authentication & authorization
- Protected admin routes
- Image upload support

---

## 🛠️ Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React.js, React Router, Axios       |
| Admin     | React.js, React Router, Axios       |
| Backend   | Node.js, Express.js                 |
| Database  | MongoDB, Mongoose                   |
| Auth      | JSON Web Tokens (JWT)               |
| Deployment| Vercel (Frontend & Admin), Render/Railway (Backend) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) 
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### 1. Clone the Repository

```bash
git clone https://github.com/subhashhunter/e-commerce.git
cd e-commerce
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm run dev
```

The API will be running at `http://localhost:3000`.

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

The frontend will be running at `http://localhost:5173`.

---

### 4. Admin Dashboard Setup

```bash
cd ../admin
npm install
```

Create a `.env` file in the `admin/` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the admin panel:

```bash
npm run dev
```

The admin dashboard will be running at `http://localhost:5174`.

---


## 📦 API Endpoints (Overview)

| Method | Endpoint              | Description              | Auth |
|--------|-----------------------|--------------------------|------|
| POST   | `/api/user/register`  | Register a new user      | ❌   |
| POST   | `/api/user/login`     | Login and get token      | ❌   |
| GET    | `/api/products`       | Get all products         | ❌   |
| GET    | `/api/products/:id`   | Get a product by ID      | ❌   |
| POST   | `/api/products`       | Add a new product        | ✅ Admin |
| PUT    | `/api/products/:id`   | Update a product         | ✅ Admin |
| DELETE | `/api/products/:id`   | Delete a product         | ✅ Admin |
| POST   | `/api/orders`         | Place an order           | ✅ User |
| GET    | `/api/orders`         | Get all orders           | ✅ Admin |

---

## 🌐 Deployment

This project is deployed using:
- **Frontend & Admin:** [Vercel](https://vercel.com/)
- **Backend:**  [Vercel](https://vercel.com/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 👤 Author

**Subhash**
- GitHub: [@subhashhunter](https://github.com/subhashhunter)

---

> ⭐ If you found this project helpful, please give it a star!
