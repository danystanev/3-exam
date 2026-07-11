import template from './my-recipes.html?raw';
import './my-recipes.css';
import { getMyRecipes, deleteRecipe } from '../../lib/recipes.js';

export function renderPage() {
  return template;
}

export async function bindPageActions() {
  const container = document.querySelector('#my-recipes-list');

  if (!container) {
    return;
  }

  try {
    const recipes = await getMyRecipes();

    if (recipes.length === 0) {
      container.innerHTML = `
        <div class="alert alert-info">
          You don't have any recipes yet.
        </div>
      `;
      return;
    }

    container.innerHTML = recipes
      .map(
        (recipe) => `
          <div class="card mb-3">
            ${
              recipe.image_url
                ? `<img src="${recipe.image_url}" class="card-img-top" style="height:220px;object-fit:cover;">`
                : ''
            }

            <div class="card-body">
              <h5 class="card-title">${recipe.title}</h5>
              <p class="card-text">${recipe.description ?? ''}</p>

              <small class="text-muted">
                ${recipe.difficulty} • ${recipe.cooking_time} min
              </small>

<button
  class="btn btn-danger btn-sm mt-3 delete-recipe"
  data-id="${recipe.id}">
  Delete
</button>

<button
  class="btn btn-primary btn-sm mt-3 me-2 edit-recipe"
  data-id="${recipe.id}">
  Edit
</button>

            </div>
          </div>
        `
      )
      .join('');

container.querySelectorAll('.delete-recipe').forEach((button) => {
  button.addEventListener('click', async () => {
    if (!confirm('Delete this recipe?')) {
      return;
    }

    try {
      await deleteRecipe(button.dataset.id);
      button.closest('.card').remove();
    } catch (error) {
      alert(error.message);
    }
  });
});

  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <div class="alert alert-danger">
        ${error.message}
      </div>
    `;
  }
}