import template from './recipes.html?raw';
import './recipes.css';

const recipes = [
  {
    title: 'Fresh Pasta Primavera',
    image: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8f26?auto=format&fit=crop&w=900&q=80',
    cookingTime: '25 min',
    difficulty: 'Easy',
    category: 'Main Dish'
  },
  {
    title: 'Classic Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    cookingTime: '55 min',
    difficulty: 'Medium',
    category: 'Dessert'
  },
  {
    title: 'Roasted Chicken Dinner',
    image: 'https://images.unsplash.com/photo-1604908177522-040fc0b2fa29?auto=format&fit=crop&w=900&q=80',
    cookingTime: '1 hr 20 min',
    difficulty: 'Medium',
    category: 'Main Dish'
  },
  {
    title: 'Summer Garden Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    cookingTime: '15 min',
    difficulty: 'Easy',
    category: 'Salad'
  },
  {
    title: 'Creamy Mushroom Soup',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    cookingTime: '40 min',
    difficulty: 'Medium',
    category: 'Soup'
  },
  {
    title: 'Berry Breakfast Parfait',
    image: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=900&q=80',
    cookingTime: '10 min',
    difficulty: 'Easy',
    category: 'Breakfast'
  }
];

function renderRecipeCard(recipe) {
  return `
    <div class="col-sm-6 col-lg-4">
      <div class="card h-100 border-0 shadow-sm recipe-card">
        <img src="${recipe.image}" class="card-img-top recipe-card__image" alt="${recipe.title}" />
        <div class="card-body d-flex flex-column">
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="badge text-bg-primary">${recipe.category}</span>
            <span class="badge text-bg-secondary">${recipe.difficulty}</span>
          </div>
          <h2 class="h5 fw-bold mb-3">${recipe.title}</h2>
          <p class="text-muted mb-0">Cooking time: ${recipe.cookingTime}</p>
        </div>
      </div>
    </div>
  `;
}

export function renderPage() {
  const cards = recipes.map(renderRecipeCard).join('');
  return template.replace('{{recipes}}', cards);
}