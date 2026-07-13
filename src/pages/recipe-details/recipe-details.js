import template from './recipe-details.html?raw';
import './recipe-details.css';

import { getRecipeById } from '../../lib/recipes.js';

export function renderPage() {
  return template;
}

export async function bindPageActions({ params }) {

  const container = document.querySelector('#recipe-details');

  try {

    const recipe = await getRecipeById(params.id);

    container.innerHTML = `
      <div class="card">

        <img
          src="${recipe.image_url}"
          class="card-img-top"
          alt="${recipe.title}">

        <div class="card-body">

          <h2>${recipe.title}</h2>

          <p>
            <strong>Difficulty:</strong>
            ${recipe.difficulty}
          </p>

          <p>
            <strong>Cooking time:</strong>
            ${recipe.cooking_time} min
          </p>

          <hr>

          <h4>Ingredients</h4>

          <p style="white-space: pre-line;">
            ${recipe.ingredients}
          </p>

          <hr>

          <h4>Instructions</h4>

          <p style="white-space: pre-line;">
            ${recipe.instructions}
          </p>

        </div>

      </div>
    `;

  } catch (error) {

    console.error(error);

    container.innerHTML =
      '<div class="alert alert-danger">Recipe not found.</div>';

  }

}