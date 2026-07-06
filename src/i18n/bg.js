const bg = {
  common: {
    appName: '3 Exam',
    guest: 'Гост',
    toggleNavigation: 'Превключи навигацията',
    languageLabel: 'Език',
    submit: 'Изпрати'
  },
  auth: {
    configurationMissing: 'Supabase не е конфигуриран. Добавете нужните променливи на средата и опитайте отново.',
    loginFailed: 'Неуспешен вход. Проверете данните и опитайте отново.',
    registerFailed: 'Регистрацията е неуспешна. Опитайте отново.',
    emailAlreadyExists: 'Този имейл вече е регистриран.',
    unexpectedError: 'Нещо се обърка. Моля, опитайте отново по-късно.',
    logoutFailed: 'Неуспешен изход. Моля, опитайте отново.'
  },
  nav: {
    home: 'Начало',
    recipes: 'Рецепти',
    login: 'Вход',
    register: 'Регистрация',
    myRecipes: 'Моите рецепти',
    addRecipe: 'Добави рецепта',
    profile: 'Профил',
    logout: 'Изход',
    adminPanel: 'Админ панел'
  },
  footer: {
    scaffold: '3 Exam скеле',
    builtWith: 'Изградено с Vite, Bootstrap и history routing'
  },
  pages: {
    home: {
      eyebrow: 'Начало',
      title: 'Добър апетит',
      subtitle: 'Открий лесни и вкусни рецепти и намери идеи за следващото си ястие.',
      browseRecipes: 'Разгледай рецепти',
      signIn: 'Вход',
      featured: 'Избрано',
      card1Title: 'Прясна паста',
      card1Text: 'Бърза рецепта за делник с богат доматен сос и босилек.',
      card2Title: 'Градинска салата',
      card2Text: 'Лека и свежа комбинация от сезонни зеленчуци и билки.',
      card3Title: 'Печено пиле',
      card3Text: 'Сочно печено с хрупкава коричка и крехко месо.',
      card4Title: 'Шоколадова торта',
      card4Text: 'Богат десерт за празници и специални моменти.'
    },
    recipes: {
      eyebrow: 'Рецепти',
      title: 'Всички рецепти',
      subtitle: 'Разгледай най-новите рецепти и избери нещо вкусно за следващото си ястие.',
      cookingTime: 'Време за готвене: {{time}}'
    },
    login: {
      eyebrow: 'Вход',
      title: 'Добре дошли отново',
      subtitle: 'Влезте с вашия Supabase профил, за да продължите.',
      emailLabel: 'Имейл',
      emailPlaceholder: 'you@example.com',
      passwordLabel: 'Парола',
      passwordPlaceholder: 'Парола',
      submit: 'Вход',
      emailInvalid: 'Имейлът е задължителен и трябва да е валиден.',
      passwordInvalid: 'Паролата е задължителна и трябва да е поне 6 символа.',
      loginFailed: 'Неуспешен вход. Проверете данните и опитайте отново.'
    },
    register: {
      eyebrow: 'Регистрация',
      title: 'Създай профил',
      fullNameLabel: 'Име',
      fullNamePlaceholder: 'Вашето име',
      emailLabel: 'Имейл',
      emailPlaceholder: 'you@example.com',
      passwordLabel: 'Парола',
      passwordPlaceholder: 'Парола',
      confirmPasswordLabel: 'Потвърди парола',
      confirmPasswordPlaceholder: 'Повтори паролата',
      submit: 'Създай профил',
      fullNameInvalid: 'Името е задължително.',
      emailInvalid: 'Имейлът е задължителен и трябва да е валиден.',
      passwordInvalid: 'Паролата е задължителна и трябва да е поне 6 символа.',
      confirmPasswordInvalid: 'Моля, потвърдете паролата.',
      passwordsDoNotMatch: 'Паролите не съвпадат.',
      completedCheckEmail: 'Регистрацията е успешна. Проверете имейла си за потвърждение преди вход.',
      registerFailed: 'Регистрацията е неуспешна. Опитайте отново.'
    },
    addRecipe: {
      eyebrow: 'Добави рецепта',
      title: 'Създай нова рецепта',
      subtitle: 'Попълни данните по-долу, за да публикуваш нова рецепта.',
      titleLabel: 'Заглавие',
      titlePlaceholder: 'Заглавие на рецепта',
      titleInvalid: 'Заглавието е задължително.',
      ingredientsLabel: 'Съставки',
      ingredientsPlaceholder: 'Изброй съставките, по една на ред',
      ingredientsInvalid: 'Съставките са задължителни.',
      instructionsLabel: 'Инструкции',
      instructionsPlaceholder: 'Опиши начина на приготвяне',
      instructionsInvalid: 'Инструкциите са задължителни.',
      cookingTimeLabel: 'Време за готвене',
      cookingTimePlaceholder: '30',
      minutes: 'мин',
      cookingTimeInvalid: 'Времето за готвене е задължително.',
      difficultyLabel: 'Трудност',
      difficultyPlaceholder: 'Избери трудност',
      difficultyInvalid: 'Моля, изберете ниво на трудност.',
      categoryLabel: 'Категория',
      categoryPlaceholder: 'Избери категория',
      categoryInvalid: 'Моля, изберете категория.',
      imageLabel: 'Качване на снимка',
      imageInvalid: 'Моля, качете изображение.',
      save: 'Запази рецепта',
      clear: 'Изчисти формата',
      validatedSuccess: 'Формата е валидирана успешно. Свържете я със Supabase, за да запазите рецептата.'
    },
    dashboard: {
      eyebrow: 'Табло',
      title: 'Преглед',
      projectsTitle: 'Проекти',
      projectsText: 'Проследявай активните работни пространства и етапи.',
      tasksTitle: 'Задачи',
      tasksText: 'Виж броя задачи, срокове и промени в статуса.',
      activityTitle: 'Активност',
      activityText: 'Прегледай последните актуализации от екипа.'
    },
    myRecipes: {
      eyebrow: 'Моите рецепти',
      title: 'Моите рецепти',
      text: 'Влезлите потребители могат да управляват собствените си рецепти тук.'
    },
    profile: {
      eyebrow: 'Профил',
      title: 'Профил',
      text: 'Примерна страница за потребителски профил.'
    },
    adminPanel: {
      eyebrow: 'Админ панел',
      title: 'Админ панел',
      text: 'Тук ще бъдат инструментите за администрация и модерация.'
    },
    projectTasks: {
      eyebrow: 'Задачи по проект',
      title: 'Проект {{projectId}}',
      text: 'Този маршрут демонстрира динамични параметри за вложени URL адреси.',
      item1: 'Преглед на детайли по задачите',
      item2: 'Обновяване на статус на задача',
      item3: 'Преглед на прогреса по проекта'
    },
    notFound: {
      eyebrow: 'Не е намерено',
      title: 'Страницата не е намерена',
      text: 'Заявеният от вас маршрут не съществува в това скеле.',
      cta: 'Към началото'
    },
    logout: {
      eyebrow: 'Изход',
      title: 'Излязохте от профила',
      text: 'Този маршрут е примерен контейнер за действието Изход от навигацията.'
    }
  },
  recipesData: {
    freshPasta: {
      title: 'Прясна паста Примавера',
      category: 'Основно',
      difficulty: 'Лесно',
      time: '25 мин'
    },
    chocolateCake: {
      title: 'Класическа шоколадова торта',
      category: 'Десерт',
      difficulty: 'Средно',
      time: '55 мин'
    },
    roastedChicken: {
      title: 'Печено пиле за вечеря',
      category: 'Основно',
      difficulty: 'Средно',
      time: '1 ч 20 мин'
    },
    gardenSalad: {
      title: 'Лятна градинска салата',
      category: 'Салата',
      difficulty: 'Лесно',
      time: '15 мин'
    },
    mushroomSoup: {
      title: 'Крем супа от гъби',
      category: 'Супа',
      difficulty: 'Средно',
      time: '40 мин'
    },
    berryParfait: {
      title: 'Плодов парфе за закуска',
      category: 'Закуска',
      difficulty: 'Лесно',
      time: '10 мин'
    }
  },
  forms: {
    difficulty: {
      easy: 'Лесно',
      medium: 'Средно',
      hard: 'Трудно'
    },
    category: {
      breakfast: 'Закуска',
      lunch: 'Обяд',
      dinner: 'Вечеря',
      dessert: 'Десерт',
      salad: 'Салата',
      soup: 'Супа'
    }
  }
};

export default bg;