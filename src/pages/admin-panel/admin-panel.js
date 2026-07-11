import template from './admin-panel.html?raw';
import './admin-panel.css';

import { getAllRecipes, deleteRecipe } from '../../lib/recipes.js';

export function renderPage() {
  return template;
}

export async function bindPageActions() {
  const container = document.querySelector('#admin-recipes');

  async function loadRecipes() {
    try {
      const recipes = await getAllRecipes();
console.log('Admin recipes:', recipes);

      if (!recipes.length) {
        container.innerHTML = '<p>No recipes found.</p>';
        return;
      }

      container.innerHTML = recipes.map(recipe => `
        <div class="card mb-3">
          <div class="card-body">
            <h5>${recipe.title}</h5>

            <p>
              <strong>Author:</strong>
              ${recipe.owner_id}
            </p>

            <p>
              <strong>Difficulty:</strong>
              ${recipe.difficulty}
            </p>

            <button
              class="btn btn-danger btn-sm delete-recipe"
              data-id="${recipe.id}">
              Delete
            </button>
          </div>
        </div>
      `).join('');

      container.querySelectorAll('.delete-recipe').forEach(button => {
        button.addEventListener('click', async () => {

          if (!confirm('Delete this recipe?')) {
            return;
          }

          await deleteRecipe(button.dataset.id);

          loadRecipes();
        });
      });

    } catch (error) {
      console.error(error);

      container.innerHTML =
        '<div class="alert alert-danger">Cannot load recipes.</div>';
    }
  }

  loadRecipes();
}