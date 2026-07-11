import { getSupabaseClient } from './supabase.js';

const CATEGORY_MAP = {
  Breakfast: 1,
  Lunch: 2,
  Dinner: 3,
  Dessert: 4,
  Soup: 5,
  Salad: 6,
  Drink: 7
};

function getClient() {
  const supabase = getSupabaseClient();

  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  return supabase;
}
async function uploadRecipeImage(file) {
  const supabase = getClient();

  if (!file) {
    return null;
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;

  const { error } = await supabase.storage
    .from('recipe-images')
    .upload(fileName, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from('recipe-images')
    .getPublicUrl(fileName);

  return data.publicUrl;
}

export async function createRecipe(recipe) {
  const supabase = getClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('User is not authenticated.');
  }

console.log('Current user:', user);

  const imageUrl = await uploadRecipeImage(recipe.image);

  const recipeToInsert = {
    title: recipe.title,
    description: recipe.instructions.substring(0, 150),
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    cooking_time: Number(recipe.cookingTime),
    difficulty: recipe.difficulty,
    category_id: CATEGORY_MAP[recipe.category],
    image_url: imageUrl,
    owner_id: user.id
  };

console.log(recipeToInsert);

  const { data, error } = await supabase
    .from('recipes')
    .insert(recipeToInsert)
    .select()
    .single();

console.log('Insert result:', data);
console.log('Insert error:', error);

  if (error) {
    throw error;
  }

  return data;
}

export async function getMyRecipes() {
  const supabase = getClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('owner_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteRecipe(id) {
  const supabase = getClient();

  const { error } = await supabase
    .from('recipes')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
}

export async function updateRecipe(id, recipe) {
  const supabase = getClient();

  const updateData = {
    title: recipe.title,
    description: recipe.instructions.substring(0, 150),
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    cooking_time: Number(recipe.cookingTime),
    difficulty: recipe.difficulty,
    category_id: CATEGORY_MAP[recipe.category]
  };

  if (recipe.image) {
    updateData.image_url = await uploadRecipeImage(recipe.image);
  }

  const { data, error } = await supabase
    .from('recipes')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getRecipeById(id) {
  const supabase = getClient();

  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}