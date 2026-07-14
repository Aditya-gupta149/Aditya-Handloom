# 🛍️ Aditya Handloom

<div align="center">

### Premium Handloom E-Commerce Platform

A modern and scalable full-stack e-commerce application built using the MERN stack, offering seamless shopping, secure authentication, online payments, and comprehensive admin management.

🌐 **Live Demo:** https://aditya-handloom.vercel.app

</div>

---

## 📖 Overview

Aditya Handloom is a feature-rich e-commerce platform designed to provide users with a smooth online shopping experience for premium handloom and traditional clothing products. The platform includes secure authentication, product browsing, advanced filtering, Stripe-powered payments, order tracking, and an admin dashboard for managing inventory and users.

---

## ✨ Key Features

### 👤 User Authentication & Authorization

- Secure user registration and login
- JWT-based authentication
- Password hashing using bcrypt
- Role-based access control (Admin/User)
- Persistent login sessions

---

### 🛒 Shopping Experience

- Browse premium handloom collections
- Product search and filtering
- Category-based shopping
- Responsive product cards
- Add and remove products from cart
- Dynamic cart updates

---

### 💳 Checkout & Payments

- Secure checkout workflow
- Stripe payment gateway integration
- Payment success and cancellation pages
- Automatic order creation
- Payment status tracking

---

### 📦 Order Management

- Place orders securely
- View order history
- Track order status
- Payment confirmation
- Automatic stock updates after purchase

---

### 🛠️ Admin Dashboard

- Manage products
- Add new products
- Edit product details
- Delete products
- Manage customers
- Update order status
- Monitor inventory

---

### ☁️ Media & Cloud Integration

- Cloudinary image uploads
- Cloud-based product storage
- Fast image delivery

---

## 🚀 Tech Stack

### Frontend

| Technology | Usage |
|------------|--------|
| React.js | UI Development |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router DOM | Routing |
| Axios | API Communication |

---

### Backend

| Technology | Usage |
|------------|--------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt.js | Password Encryption |

---

### Payments & Cloud

| Service | Purpose |
|----------|----------|
| Stripe | Online Payments |
| Cloudinary | Image Storage |
| MongoDB Atlas | Database Hosting |

---

### Deployment

| Platform | Usage |
|----------|--------|
| Vercel | Frontend Deployment |
| Render | Backend Deployment |

---

## 📂 Project Structure

```bash
Aditya-Handloom
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   └── server.js
│
└── README.md
```

---

## 🔐 Environment Variables

### Backend (`server/.env`)

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

CLIENT_URL=https://aditya-handloom.vercel.app
```

---

### Frontend (`client/.env`)

```env
VITE_API_URL=https://your-backend-url/api

VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/Aditya-gupta149/Aditya-Handloom.git
```

---

### Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend will run on:

```bash
http://localhost:5000
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

## 📸 Application Screenshots

### 🏠 Home Page

<img width="1897" height="918" alt="Screenshot 2026-07-13 182829" src="https://github.com/user-attachments/assets/1a3645d4-ebc5-4004-993c-83669d0e0524" />

---

### 🛍️ Shop Page

<img width="1888" height="857" alt="Screenshot 2026-07-13 183006" src="https://github.com/user-attachments/assets/5959120b-f6b2-4c23-b2ca-1a1224e3b048" />

---

### 🛒 Cart

<img width="1873" height="771" alt="Screenshot 2026-07-13 183112" src="https://github.com/user-attachments/assets/30f1baf6-5d98-4fdf-9c71-fb28663bec65" />

---

### 💳 Checkout & Payment

<img width="1812" height="897" alt="Screenshot 2026-07-13 183133" src="https://github.com/user-attachments/assets/34c8cdac-e488-417c-bd75-c296c663b03c" />

<img width="1815" height="846" alt="Screenshot 2026-07-13 183211" src="https://github.com/user-attachments/assets/d1b419d8-2a23-4a23-aeb8-1cd058358cad" />
<img width="1858" height="892" alt="Screenshot 2026-07-13 192253" src="https://github.com/user-attachments/assets/47a8589a-c82f-45b9-8bba-c3d5c79cf08c" />

---

### 📦 My Orders

<img width="1905" height="846" alt="Screenshot 2026-07-13 183309" src="https://github.com/user-attachments/assets/8ebdcd05-f6b2-4868-b448-6f8027a5f460" />

---

### 👨‍💼 Admin Dashboard

<img width="1917" height="970" alt="Screenshot 2026-07-13 195615" src="https://github.com/user-attachments/assets/846c9e0f-a470-439f-af88-cc735196d6b4" />

---

### 📋 Product Management

<img width="1851" height="851" alt="Screenshot 2026-07-13 195703" src="https://github.com/user-attachments/assets/3a27fa28-dbaf-4070-91c7-101704d6f4a3" />

---

### 📊 Order Management

<img width="1845" height="847" alt="Screenshot 2026-07-13 195905" src="https://github.com/user-attachments/assets/5e3b06f9-43bf-4bbd-987c-f5c1f7582de0" />

---

## 🔄 Workflow

```text
User Registration/Login
            ↓
      Browse Products
            ↓
        Add to Cart
            ↓
         Checkout
            ↓
      Stripe Payment
            ↓
      Order Creation
            ↓
     Inventory Update
            ↓
       Order Tracking
```

---

## 🌟 Future Enhancements

- Wishlist functionality
- Product reviews and ratings
- Order tracking timeline
- Coupon and discount system
- Email notifications
- Dark mode
- AI-powered recommendations
- Advanced analytics dashboard

---

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience with:

- Full-stack web development
- REST API design
- Authentication and authorization
- Payment gateway integration
- Cloud storage management
- Database design
- Deployment pipelines
- State management
- Responsive UI design

---

## 👨‍💻 Developer

### Aditya Gupta

**B.Tech, Electronics and Communication Engineering**

National Institute of Technology Patna

- 💻 Full-Stack Developer
- 🧠 Problem Solver
- 🚀 MERN Stack Enthusiast

GitHub: https://github.com/Aditya-gupta149

---

<div align="center">

### ⭐ If you found this project interesting, consider giving it a star!

Built with ❤️ using the MERN Stack.

</div>
