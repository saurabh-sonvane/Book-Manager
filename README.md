# 📚 Personal Book Manager

A clean and intuitive web application where users can **manage their personal reading collection**.  
Users can **sign up, log in securely, and track books they want to read, are currently reading, or have completed.**

The goal of this tool is to feel **personal, elegant, and distraction-free** — helping users focus on their reading journey.

---

# 🚀 Live Demo

🔗 https://personalbookmanager-thumbstack.vercel.app/

---

# ✨ Core Features

## 1️⃣ Authentication
Secure authentication system using **JWT**.

Users can:

- Sign up for a new account
- Log in securely
- Log out
- Access protected routes

User authentication ensures that **each user only sees their own books.**

---

## 2️⃣ Book Collection

Users can manage their personal book library.

Supported actions:

- ➕ Add a new book
- ✏️ Update reading status
- ❌ Delete books
- 🔎 Filter books by reading status

### Book Status Options

- 📖 Want to Read
- 📘 Reading
- ✅ Completed

---

## 3️⃣ Dashboard

The dashboard provides a clean overview of the user's reading collection.

Users can:

- View their entire book list
- Filter books by status
- Update reading status
- Remove books from collection
- See total books displayed

The UI is designed to feel **minimal, fast, and responsive.**

---

# 🧰 Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **Tailwind CSS**

### Backend
- **Next.js API Routes**

### Authentication
- **JWT (JSON Web Token)**

### Database
- **MongoDB Atlas**

### Deployment
- **Vercel**

---

## 📁 Project Structure

```
personal-book-manager
│
├── app
│   ├── api
│   │   └── auth
│   │       ├── books
│   │       │   ├── route.js
│   │       │   └── [id]
│   │       │       └── route.js
│   │       │
│   │       ├── login
│   │       │   └── route.js
│   │       │
│   │       ├── logout
│   │       │   └── route.js
│   │       │
│   │       └── signup
│   │           └── route.js
│   │
│   ├── dashboard
│   │   ├── components
│   │   │   ├── BookFilter.js
│   │   │   ├── BookForm.js
│   │   │   └── BookGrid.js
│   │   │
│   │   └── page.js
│   │
│   ├── login
│   │   └── page.js
│   │
│   ├── signup
│   │   └── page.js
│   │
│   ├── services
│   │   └── bookService.js
│   │
│   ├── layout.js
│   └── page.js
│
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```


---

# ⚙️ Environment Variables

Create a `.env.local` file in the root folder.

Example:

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

You can refer to:
.env.example

---

# 🛠️ Local Setup Guide

Follow these steps to run the project locally.

---



```bash
## Clone the repository

git clone https://github.com/saurabh-sonvane/Book-Manager.git

## Navigate into the project

cd Book-Manager/personal-book-manager

## Install dependencies

npm install

## Run the development server

npm run dev
```

---

##  🔐 Authentication Flow

- User signs up

- Password stored securely

- JWT generated on login

- JWT stored in cookies

- Protected API routes verify the token

- User-specific data is returned

---

## 📡 API Routes

| Route                  | Method | Description        |
| ---------------------- | ------ | ------------------ |
| `/api/auth/signup`     | POST   | Register new user  |
| `/api/auth/login`      | POST   | Login user         |
| `/api/auth/logout`     | POST   | Logout user        |
| `/api/auth/books`      | GET    | Fetch user books   |
| `/api/auth/books`      | POST   | Add new book       |
| `/api/auth/books/[id]` | PUT    | Update book status |
| `/api/auth/books/[id]` | DELETE | Delete book        |


---

## 👨‍💻 Author

Saurabh Sonvane

GitHub:
https://github.com/saurabh-sonvane

---
