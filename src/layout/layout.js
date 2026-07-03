import '../styles/layout.css';

export function renderLayout() {
  return `
    <div class="app-shell" data-shell>
      <header data-header-slot></header>
      <main class="app-shell__content" data-content-slot></main>
      <footer data-footer-slot></footer>
    </div>
  `;
}