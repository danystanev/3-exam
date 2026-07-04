import template from './login.html?raw';
import './login.css';
import { loginWithPassword } from '../../state/auth.js';

export function renderPage() {
  return template;
}

export function bindPageActions({ navigateTo }) {
  const form = document.querySelector('#login-form');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const messageBox = document.querySelector('#login-message');

  const showMessage = (message, type = 'danger') => {
    if (!messageBox) {
      return;
    }

    messageBox.className = `alert alert-${type} mb-3`;
    messageBox.textContent = message;
    messageBox.classList.remove('d-none');
  };

  const hideMessage = () => {
    if (!messageBox) {
      return;
    }

    messageBox.className = 'alert d-none mb-3';
    messageBox.textContent = '';
  };

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
      hideMessage();

      if (event.target === emailInput || event.target === passwordInput) {
        validateField(event.target);
      }
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      try {
        await loginWithPassword({
          email: emailInput.value.trim(),
          password: passwordInput.value
        });

        navigateTo('/', { replace: true });
      } catch (error) {
        showMessage(error.message || 'Unable to log in. Please check your credentials and try again.');
      }
    });
  }
}