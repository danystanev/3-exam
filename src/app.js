import { renderLayout } from './layout/layout.js';
import { setupRouter } from './router.js';
import { initAuth } from './state/auth.js';

export async function startApp() {
  const app = document.querySelector('#app');

  if (!app) {
    throw new Error('App root not found.');
  }

  app.innerHTML = renderLayout();
  await initAuth();
  setupRouter();
}