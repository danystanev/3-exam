import template from './add-recipe.html?raw';
import './add-recipe.css';
import { t } from '../../i18n/i18n.js';

export function renderPage() {
  return template;
}

export function bindPageActions() {
  const form = document.querySelector('#add-recipe-form');
  const messageBox = document.querySelector('#add-recipe-message');

  const fields = [
    document.querySelector('#title'),
    document.querySelector('#ingredients'),
    document.querySelector('#instructions'),
    document.querySelector('#cookingTime'),
    document.querySelector('#difficulty'),
    document.querySelector('#category'),
    document.querySelector('#image')
  ];

  const showMessage = (message, type = 'success') => {
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

  const validateField = (field) => {
    if (!field) {
      return;
    }

    if (field.type === 'file') {
      const hasFile = field.files && field.files.length > 0;
      field.setCustomValidity(hasFile ? '' : t('pages.addRecipe.imageInvalid'));
    }

    field.classList.toggle('is-invalid', !field.checkValidity());
    field.classList.toggle('is-valid', field.checkValidity());
  };

  const validateForm = () => {
    if (!form) {
      return false;
    }

    form.classList.add('was-validated');
    fields.forEach(validateField);
    return form.checkValidity();
  };

  if (!form) {
    return;
  }

  form.addEventListener('input', (event) => {
    hideMessage();

    validateField(event.target);
  });

  form.addEventListener('change', (event) => {
    hideMessage();

    validateField(event.target);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    showMessage(t('pages.addRecipe.validatedSuccess'), 'success');
    form.reset();
    form.classList.remove('was-validated');

    fields.forEach((field) => {
      if (!field) {
        return;
      }

      field.classList.remove('is-valid', 'is-invalid');
      field.setCustomValidity('');
    });
  });

  form.addEventListener('reset', () => {
    hideMessage();

    fields.forEach((field) => {
      if (!field) {
        return;
      }

      field.classList.remove('is-valid', 'is-invalid');
      field.setCustomValidity('');
    });
  });
}