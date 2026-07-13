import template from './edit-recipe.html?raw';
import './edit-recipe.css';

import {
  getRecipeById,
  updateRecipe
} from '../../lib/recipes.js';

export function renderPage() {
  return template;
}

export async function bindPageActions({ params }) {

  const form = document.querySelector('#edit-recipe-form');

  const recipe = await getRecipeById(params.id);

  document.querySelector('#title').value = recipe.title;
  document.querySelector('#ingredients').value = recipe.ingredients;
  document.querySelector('#instructions').value = recipe.instructions;
  document.querySelector('#cookingTime').value = recipe.cooking_time;
  document.querySelector('#difficulty').value = recipe.difficulty;

  form.addEventListener('submit', async (event) => {

    event.preventDefault();

    await updateRecipe(recipe.id, {

      title: document.querySelector('#title').value,

      ingredients: document.querySelector('#ingredients').value,

      instructions: document.querySelector('#instructions').value,

      cookingTime: document.querySelector('#cookingTime').value,

      difficulty: document.querySelector('#difficulty').value,

      category: recipe.category_id,

      image: document.querySelector('#image').files[0]

    });

    alert('Recipe updated successfully!');

    window.history.pushState({}, '', '/my-recipes');
    window.dispatchEvent(new PopStateEvent('popstate'));

  });

}