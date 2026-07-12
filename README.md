# 🍽️ Recipe Book

A modern multi-page recipe management application built as a Capstone Project for the **Software Technologies with AI** course at **SoftUni AI**.

The application allows users to create, manage and share recipes using a modern JavaScript frontend and Supabase backend.

---

# Features

## Guest users

- Browse recipes
- View application home page
- Register new account
- Login

## Registered users

- Create recipes
- Upload recipe images
- View personal recipes
- Edit own recipes
- Delete own recipes
- View profile
- Logout

## Administrator

- Access Admin Panel
- View recipes
- Delete recipes

---

# Technologies

Frontend

- HTML5
- CSS3
- JavaScript (ES Modules)
- Bootstrap 5
- Vite

Backend

- Supabase Database
- Supabase Authentication
- Supabase Storage
- Row Level Security (RLS)

Version Control

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
│   ├── add-recipe
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
| recipe_categories | Recipe categories |
| user_roles / roles | User role management (Admin/User) |

Relationships

```
profiles
    │
    │ 1 : N
    ▼
recipes

recipe_categories
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

---

# Security

- Supabase Authentication
- Row Level Security (RLS)
- Protected routes
- Admin-only pages
- Owner-only recipe editing
- Owner-only recipe deletion

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

Run

```bash
npm run dev
```

---

# Build

```bash
npm run build
```

Preview

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

## Admin

```
Email:
admin@recipebook.com

Password:
admin123
```

(Replace with your actual demo accounts.)

---

# Project Structure

Main folders

```
components/
```

Reusable UI components

```
pages/
```

Application pages

```
lib/
```

Supabase services

```
state/
```

Authentication

```
i18n/
```

Localization

---

# Project Status

This project was developed as a Capstone Project for the **Software Technologies with AI** course at **SoftUni AI**.

The application demonstrates:

- Multi-page JavaScript architecture
- Authentication and authorization
- Supabase database integration
- File upload with Supabase Storage
- CRUD operations
- Responsive UI with Bootstrap
- Internationalization (BG/EN)
- Admin role management

# Author

Danail Stanev

SoftUni AI Capstone Project

2026