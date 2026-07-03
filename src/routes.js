export const routes = [
  {
    name: 'home',
    pattern: /^\/$/,
    params: () => ({})
  },
  {
    name: 'recipes',
    pattern: /^\/recipes\/?$/,
    params: () => ({})
  },
  {
    name: 'login',
    pattern: /^\/login\/?$/,
    params: () => ({})
  },
  {
    name: 'register',
    pattern: /^\/register\/?$/,
    params: () => ({})
  },
  {
    name: 'my-recipes',
    pattern: /^\/my-recipes\/?$/,
    params: () => ({})
  },
  {
    name: 'add-recipe',
    pattern: /^\/add-recipe\/?$/,
    params: () => ({})
  },
  {
    name: 'profile',
    pattern: /^\/profile\/?$/,
    params: () => ({})
  },
  {
    name: 'logout',
    pattern: /^\/logout\/?$/,
    params: () => ({})
  },
  {
    name: 'admin-panel',
    pattern: /^\/admin-panel\/?$/,
    params: () => ({})
  },
  {
    name: 'dashboard',
    pattern: /^\/dashboard\/?$/,
    params: () => ({})
  },
  {
    name: 'project-tasks',
    pattern: /^\/projects\/([^/]+)\/tasks\/?$/,
    params: (match) => ({ projectId: match[1] })
  }
];