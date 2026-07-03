# 3 Exam

Modular Vite single-page app with:

- HTML fragments per component and page
- JavaScript modules per route and UI block
- Bootstrap styling
- History API routing for `/`, `/login`, `/dashboard`, and `/projects/{id}/tasks`

## Commands

```bash
npm install
npm run dev
```

## Notes

For production hosting on a static server, keep SPA rewrite rules enabled so direct access to deep links loads `index.html` first.