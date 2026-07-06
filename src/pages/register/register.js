import template from './register.html?raw';
import './register.css';
import { getAuthErrorMessage, registerUser } from '../../state/auth.js';
import { t } from '../../i18n/i18n.js';
import { consumeLoginRedirect } from '../../router.js';

export function renderPage() {
  return template;
}

export function bindPageActions({ navigateTo }) {
  const form = document.querySelector('#register-form');
  const fullNameInput = document.querySelector('#fullName');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const confirmPasswordInput = document.querySelector('#confirmPassword');
  const messageBox = document.querySelector('#register-message');

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

  const validatePasswordMatch = () => {
    if (!passwordInput || !confirmPasswordInput) {
      return;
    }

    const passwordsMatch = passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value.length > 0;
    confirmPasswordInput.setCustomValidity(passwordsMatch ? '' : t('pages.register.passwordsDoNotMatch'));
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
      hideMessage();

      if (event.target === passwordInput || event.target === confirmPasswordInput) {
        validatePasswordMatch();
      }

      validateField(event.target);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      try {
        const result = await registerUser({
          fullName: fullNameInput.value.trim(),
          email: emailInput.value.trim(),
          password: passwordInput.value
        });

        if (result.session) {
          navigateTo(consumeLoginRedirect() || '/', { replace: true });
          return;
        }

        showMessage(t('pages.register.completedCheckEmail'), 'success');
        form.reset();
        form.classList.remove('was-validated');
        [fullNameInput, emailInput, passwordInput, confirmPasswordInput].forEach((input) => {
          input.classList.remove('is-valid', 'is-invalid');
          input.setCustomValidity('');
        });
      } catch (error) {
        showMessage(getAuthErrorMessage(error, 'auth.registerFailed'));
      }
    });
  }
}