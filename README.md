# 🍽️ Recipe Book

A modern multi-page recipe management application built as a **Capstone Project** for the **Software Technologies with AI** course at **SoftUni AI**.

The application allows users to create, manage, and share recipes using a modern JavaScript frontend with Supabase as a Backend-as-a-Service (BaaS).

---

# Features

## Guest Users

- Browse recipes
- View recipe details
- Access the home page
- Register a new account
- Login

## Registered Users

- Create recipes
- Upload recipe images
- View recipe details
- View personal recipes
- Edit own recipes
- Delete own recipes
- View profile
- Logout

## Administrator

- Access the Admin Panel
- View all recipes
- Delete recipes

---

# Technologies

## Frontend

- HTML5
- CSS3
- JavaScript (ES Modules)
- Bootstrap 5
- Vite

## Backend

- Supabase Database
- Supabase Authentication
- Supabase Storage
- Row Level Security (RLS)

## Version Control

- Git
- GitHub

---

# Application Architecture

```
src
│
├── components
│   ├── header
│   ├── footer
│   └── ...
│
├── pages
│   ├── home
│   ├── recipes
│   ├── recipe-details
│   ├── add-recipe
│   ├── edit-recipe
│   ├── my-recipes
│   ├── profile
│   ├── login
│   ├── register
│   └── admin-panel
│
├── lib
│   ├── recipes.js
│   └── supabase.js
│
├── state
│   └── auth.js
│
├── i18n
│
├── router.js
└── routes.js
```

---

# Database Schema

The application uses Supabase with the following main tables:

| Table | Description |
|--------|-------------|
| profiles | User profiles and roles |
| recipes | Recipes created by users |
| categories | Recipe categories |

Relationships

```
profiles
    │
    │ 1 : N
    ▼
recipes

categories
    │
    │ 1 : N
    ▼
recipes
```

---

# Authentication

The application uses **Supabase Authentication**.

Supported features:

- Register
- Login
- Logout
- Protected routes
- User roles
- Admin role
- JWT Authentication

---

# Storage

Recipe images are uploaded to

```
Supabase Storage
└── recipe-images
```

User avatars are stored in

```
avatars
```

---

# Localization

The application supports:

- 🇧🇬 Bulgarian
- 🇬🇧 English

All user interface text is localized through the built-in i18n system.

Recipe content is stored in the language entered by the author.

---

# Security

- Supabase Authentication
- Row Level Security (RLS)
- Protected routes
- Admin-only pages
- Owner-only recipe editing
- Owner-only recipe deletion

---

# Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile devices

The responsive layout is implemented using Bootstrap 5.

---

# Local Development

Clone the repository

```bash
git clone https://github.com/danystanev/3-exam.git
```

Install dependencies

```bash
npm install
```

Create

```
.env
```

Example

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Run the development server

```bash
npm run dev
```

---

# Build

Build production version

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# Demo Accounts

## User

```
Email:
demo@recipebook.com

Password:
demo123
```

## Administrator

```
Email:
admin@recipebook.com

Password:
admin123
```

Replace these credentials with your actual demo accounts before submitting the project.

---

# Project Structure

### components/

Reusable UI components

### pages/

Application pages

### lib/

Supabase services

### state/

Authentication and user state

### i18n/

Localization system

---

# Project Status

This project was developed as a **Capstone Project** for the **Software Technologies with AI** course at **SoftUni AI**.

The application demonstrates:

- Multi-page JavaScript architecture
- Authentication and authorization
- Supabase database integration
- File upload with Supabase Storage
- Full CRUD operations
- Recipe management
- Role-based access control
- Protected routes
- Responsive mobile-friendly UI
- Bootstrap 5 integration
- Internationalization (BG/EN)

---

# Author

**Danail Stanev**

Capstone Project

Software Technologies with AI

SoftUni AI

2026

---

# License

This project was developed for educational purposes as part of the SoftUni AI Capstone Project.