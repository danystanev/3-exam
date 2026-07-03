import template from './register.html?raw';
import './register.css';

export function renderPage() {
  return template;
}

export function bindPageActions({ navigateTo }) {
  const form = document.querySelector('#register-form');
  const fullNameInput = document.querySelector('#fullName');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const confirmPasswordInput = document.querySelector('#confirmPassword');

  const validatePasswordMatch = () => {
    if (!passwordInput || !confirmPasswordInput) {
      return;
    }

    const passwordsMatch = passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value.length > 0;
    confirmPasswordInput.setCustomValidity(passwordsMatch ? '' : 'Passwords do not match.');
    confirmPasswordInput.classList.toggle('is-invalid', !confirmPasswordInput.checkValidity());
    confirmPasswordInput.classList.toggle('is-valid', confirmPasswordInput.checkValidity());
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

    validatePasswordMatch();
    form.classList.add('was-validated');
    [fullNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(validateField);
    return form.checkValidity();
  };

  if (form) {
    form.addEventListener('input', (event) => {
      if (event.target === passwordInput || event.target === confirmPasswordInput) {
        validatePasswordMatch();
      }

      validateField(event.target);
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      navigateTo('/login', { replace: true });
    });
  }
}