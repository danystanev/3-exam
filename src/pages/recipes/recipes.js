import template from './recipes.html?raw';
import './recipes.css';
import { t } from '../../i18n/i18n.js';

const recipes = [
  {
    key: 'freshPasta',
    image: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8f26?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'chocolateCake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'roastedChicken',
    image: 'https://images.unsplash.com/photo-1604908177522-040fc0b2fa29?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'gardenSalad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'mushroomSoup',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'berryParfait',
    image: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=900&q=80',
  }
];

function renderRecipeCard(recipe) {
  const title = t(`recipesData.${recipe.key}.title`);
  const category = t(`recipesData.${recipe.key}.category`);
  const difficulty = t(`recipesData.${recipe.key}.difficulty`);
  const cookingTime = t(`recipesData.${recipe.key}.time`);

  return `
    <div class="col-sm-6 col-lg-4">
      <div class="card h-100 border-0 shadow-sm recipe-card">
        <img src="${recipe.image}" class="card-img-top recipe-card__image" alt="${title}" />
        <div class="card-body d-flex flex-column">
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="badge text-bg-primary">${category}</span>
            <span class="badge text-bg-secondary">${difficulty}</span>
          </div>
          <h2 class="h5 fw-bold mb-3">${title}</h2>
          <p class="text-muted mb-0">${t('pages.recipes.cookingTime', { time: cookingTime })}</p>
        </div>
      </div>
    </div>
  `;
}

export function renderPage() {
  const cards = recipes.map(renderRecipeCard).join('');
  return template.replace('{{recipes}}', cards);
}