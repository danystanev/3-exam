# 3 Exam

Modular Vite single-page app with:

- HTML fragments per component and page
- JavaScript modules per route and UI block
- Bootstrap styling
- History API routing for `/`, `/login`, `/dashboard`, and `/projects/{id}/tasks`

## Supabase Authentication

Create a `.env` file in the project root and add:

```bash
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Admin navigation is controlled by the Supabase user role metadata. Set `role: admin` in the user's `app_metadata` or `user_metadata` to show the Admin Panel link.

## Commands

```bash
npm install
npm run dev
```

## Notes

For production hosting on a static server, keep SPA rewrite rules enabled so direct access to deep links loads `index.html` first.