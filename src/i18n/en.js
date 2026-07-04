const en = {
  common: {
    appName: '3 Exam',
    guest: 'Guest',
    toggleNavigation: 'Toggle navigation',
    languageLabel: 'Language',
    submit: 'Submit'
  },
  nav: {
    home: 'Home',
    recipes: 'Recipes',
    login: 'Login',
    register: 'Register',
    myRecipes: 'My Recipes',
    addRecipe: 'Add Recipe',
    profile: 'Profile',
    logout: 'Logout',
    adminPanel: 'Admin Panel'
  },
  footer: {
    scaffold: '3 Exam scaffold',
    builtWith: 'Built with Vite, Bootstrap, and history routing'
  },
  pages: {
    home: {
      eyebrow: 'Home',
      title: 'Bon apetit',
      subtitle: 'Discover simple, tasty recipes and explore ideas for your next meal.',
      browseRecipes: 'Browse Recipes',
      signIn: 'Sign In',
      featured: 'Featured',
      card1Title: 'Fresh Pasta',
      card1Text: 'A quick weeknight recipe with a rich tomato sauce and basil.',
      card2Title: 'Garden Salad',
      card2Text: 'A light and fresh mix of seasonal vegetables and herbs.',
      card3Title: 'Roasted Chicken',
      card3Text: 'A simple roasted dish with crispy skin and tender meat.',
      card4Title: 'Chocolate Cake',
      card4Text: 'A rich dessert recipe for celebrations and special moments.'
    },
    recipes: {
      eyebrow: 'Recipes',
      title: 'All Recipes',
      subtitle: 'Browse our latest recipes and pick something delicious for your next meal.',
      cookingTime: 'Cooking time: {{time}}'
    },
    login: {
      eyebrow: 'Login',
      title: 'Welcome back',
      subtitle: 'Sign in with your Supabase account to continue.',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Password',
      submit: 'Login',
      emailInvalid: 'Email is required and must be a valid email address.',
      passwordInvalid: 'Password is required and must be at least 6 characters long.',
      loginFailed: 'Unable to log in. Please check your credentials and try again.'
    },
    register: {
      eyebrow: 'Register',
      title: 'Create an account',
      fullNameLabel: 'Full name',
      fullNamePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Password',
      confirmPasswordLabel: 'Confirm password',
      confirmPasswordPlaceholder: 'Repeat your password',
      submit: 'Create account',
      fullNameInvalid: 'Full name is required.',
      emailInvalid: 'Email is required and must be a valid email address.',
      passwordInvalid: 'Password is required and must be at least 6 characters long.',
      confirmPasswordInvalid: 'Please confirm your password.',
      passwordsDoNotMatch: 'Passwords do not match.',
      completedCheckEmail: 'Registration completed. Please check your email to confirm your account before logging in.',
      registerFailed: 'Unable to register. Please try again.'
    },
    addRecipe: {
      eyebrow: 'Add Recipe',
      title: 'Create a New Recipe',
      subtitle: 'Fill in the details below to publish a new recipe.',
      titleLabel: 'Title',
      titlePlaceholder: 'Recipe title',
      titleInvalid: 'Recipe title is required.',
      ingredientsLabel: 'Ingredients',
      ingredientsPlaceholder: 'List ingredients separated by lines',
      ingredientsInvalid: 'Ingredients are required.',
      instructionsLabel: 'Instructions',
      instructionsPlaceholder: 'Describe how to prepare the recipe',
      instructionsInvalid: 'Instructions are required.',
      cookingTimeLabel: 'Cooking time',
      cookingTimePlaceholder: '30',
      minutes: 'min',
      cookingTimeInvalid: 'Cooking time is required.',
      difficultyLabel: 'Difficulty',
      difficultyPlaceholder: 'Select difficulty',
      difficultyInvalid: 'Please choose a difficulty level.',
      categoryLabel: 'Category',
      categoryPlaceholder: 'Select category',
      categoryInvalid: 'Please choose a category.',
      imageLabel: 'Image upload',
      imageInvalid: 'Please upload an image.',
      save: 'Save Recipe',
      clear: 'Clear Form',
      validatedSuccess: 'Recipe form validated successfully. Connect this form to Supabase to save the recipe.'
    },
    dashboard: {
      eyebrow: 'Dashboard',
      title: 'Overview',
      projectsTitle: 'Projects',
      projectsText: 'Track your active workspaces and milestones.',
      tasksTitle: 'Tasks',
      tasksText: 'See task counts, due dates, and status changes.',
      activityTitle: 'Activity',
      activityText: 'Review the latest updates from your team.'
    },
    myRecipes: {
      eyebrow: 'My Recipes',
      title: 'My Recipes',
      text: 'Logged-in users can manage their own recipes here.'
    },
    profile: {
      eyebrow: 'Profile',
      title: 'Profile',
      text: 'User profile page placeholder.'
    },
    adminPanel: {
      eyebrow: 'Admin Panel',
      title: 'Admin Panel',
      text: 'Admin-only controls and moderation tools will go here.'
    },
    projectTasks: {
      eyebrow: 'Project tasks',
      title: 'Project {{projectId}}',
      text: 'This route demonstrates dynamic parameters for nested URLs.',
      item1: 'Inspect task details',
      item2: 'Update task status',
      item3: 'Review project progress'
    },
    notFound: {
      eyebrow: 'Not found',
      title: 'Page not found',
      text: 'The route you requested does not exist in this scaffold.',
      cta: 'Go home'
    },
    logout: {
      eyebrow: 'Logout',
      title: 'You have been logged out',
      text: 'This route exists as a placeholder for the navbar action.'
    }
  },
  recipesData: {
    freshPasta: {
      title: 'Fresh Pasta Primavera',
      category: 'Main Dish',
      difficulty: 'Easy',
      time: '25 min'
    },
    chocolateCake: {
      title: 'Classic Chocolate Cake',
      category: 'Dessert',
      difficulty: 'Medium',
      time: '55 min'
    },
    roastedChicken: {
      title: 'Roasted Chicken Dinner',
      category: 'Main Dish',
      difficulty: 'Medium',
      time: '1 hr 20 min'
    },
    gardenSalad: {
      title: 'Summer Garden Salad',
      category: 'Salad',
      difficulty: 'Easy',
      time: '15 min'
    },
    mushroomSoup: {
      title: 'Creamy Mushroom Soup',
      category: 'Soup',
      difficulty: 'Medium',
      time: '40 min'
    },
    berryParfait: {
      title: 'Berry Breakfast Parfait',
      category: 'Breakfast',
      difficulty: 'Easy',
      time: '10 min'
    }
  },
  forms: {
    difficulty: {
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard'
    },
    category: {
      breakfast: 'Breakfast',
      lunch: 'Lunch',
      dinner: 'Dinner',
      dessert: 'Dessert',
      salad: 'Salad',
      soup: 'Soup'
    }
  }
};

export default en;