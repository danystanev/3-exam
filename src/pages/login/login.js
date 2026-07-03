import template from './login.html?raw';
import './login.css';
import { setAdminUser, setUser } from '../../state/auth.js';

export function renderPage() {
  return template;
}

export function bindPageActions({ navigateTo }) {
  const form = document.querySelector('#login-form');
  const adminButton = document.querySelector('[data-demo-login="admin"]');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const validateField = (input) => {
    if (!input) {
      return;
    }

    input.classList.toggle('is-invalid', !input.checkValidity());
    input.classList.toggle('is-valid', input.checkValidity());
  };

  const validateForm = () => {
    if (!form) {
      return false;
    }

    form.classList.add('was-validated');
    validateField(emailInput);
    validateField(passwordInput);
    return form.checkValidity();
  };

  if (form) {
    form.addEventListener('input', (event) => {
      if (event.target === emailInput || event.target === passwordInput) {
        validateField(event.target);
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      setUser({ email: emailInput.value.trim(), role: 'user' });
      navigateTo('/', { replace: true });
    });
  }

  if (adminButton) {
    adminButton.addEventListener('click', () => {
      if (!validateForm()) {
        return;
      }

      setAdminUser();
      navigateTo('/', { replace: true });
    });
  }
}