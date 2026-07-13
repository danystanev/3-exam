import template from './add-recipe.html?raw';
import './add-recipe.css';
import { t } from '../../i18n/i18n.js';
import {
  createRecipe,
  getRecipeById,
  updateRecipe
} from '../../lib/recipes.js';

export function renderPage() {
  return template;
}

export async function bindPageActions({ params }) {
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

const recipeId = params?.id ?? null;

if (recipeId) {
  const recipe = await getRecipeById(recipeId);

  document.querySelector('#title').value = recipe.title;
  document.querySelector('#ingredients').value = recipe.ingredients;
  document.querySelector('#instructions').value = recipe.instructions;
  document.querySelector('#cookingTime').value = recipe.cooking_time;
  document.querySelector('#difficulty').value = recipe.difficulty;

  const categories = {
    1: 'Breakfast',
    2: 'Lunch',
    3: 'Dinner',
    4: 'Dessert',
    5: 'Soup',
    6: 'Salad',
    7: 'Drink'
  };

  document.querySelector('#category').value =
    categories[recipe.category_id];
}

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

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  hideMessage();

  if (!validateForm()) {
    return;
  }

  try {
    const recipe = {
      title: document.querySelector('#title').value.trim(),
      ingredients: document.querySelector('#ingredients').value.trim(),
      instructions: document.querySelector('#instructions').value.trim(),
      cookingTime: Number(document.querySelector('#cookingTime').value),
      difficulty: document.querySelector('#difficulty').value,
      category: document.querySelector('#category').value,
      image: document.querySelector('#image').files[0]
    };

    if (recipeId) {
  await updateRecipe(recipeId, recipe);
  showMessage('Recipe updated successfully!', 'success');
} else {
  await createRecipe(recipe);
  showMessage(t('pages.addRecipe.validatedSuccess'), 'success');
}

       form.reset();
    form.classList.remove('was-validated');

    fields.forEach((field) => {
      if (!field) {
        return;
      }

      field.classList.remove('is-valid', 'is-invalid');
      field.setCustomValidity('');
    });

  } catch (error) {
    console.error(error);
    showMessage(error.message || 'Unable to save recipe.', 'danger');
  }
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