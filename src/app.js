import { renderLayout } from './layout/layout.js';
import { setupRouter } from './router.js';

export function startApp() {
  const app = document.querySelector('#app');

  if (!app) {
    throw new Error('App root not found.');
  }

  app.innerHTML = renderLayout();
  setupRouter();
}