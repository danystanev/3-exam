import template from './login.html?raw';
import './login.css';
import { setAdminUser, setGuestUser } from '../../state/auth.js';

export function renderPage() {
  return template;
}

export function bindPageActions({ navigateTo }) {
  const form = document.querySelector('#login-form');
  const adminButton = document.querySelector('[data-demo-login="admin"]');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      setGuestUser();
      navigateTo('/', { replace: true });
    });
  }

  if (adminButton) {
    adminButton.addEventListener('click', () => {
      setAdminUser();
      navigateTo('/', { replace: true });
    });
  }
}