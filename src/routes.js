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
    name: 'recipe-details',
    pattern: /^\/recipes\/([^/]+)\/?$/,
    params: (match) => ({
      id: match[1]
    })
  },
{
  name: 'edit-recipe',
  pattern: /^\/edit-recipe\/([^/]+)\/?$/,
  params: (match) => ({
    id: match[1]
  }),
  protected: true
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
    params: () => ({}),
    protected: true
  },
  {
    name: 'add-recipe',
    pattern: /^\/add-recipe\/?$/,
    params: () => ({}),
    protected: true
  },
{
  name: 'add-recipe',
  pattern: /^\/add-recipe\/([^/]+)\/?$/,
  params: (match) => ({
    id: match[1]
  }),
  protected: true
},
{
  name: 'add-recipe',
  pattern: /^\/edit-recipe\/([^/]+)\/?$/,
  params: (match) => ({
    id: match[1]
  }),
  protected: true
},
  {
    name: 'profile',
    pattern: /^\/profile\/?$/,
    params: () => ({}),
    protected: true
  },
  {
    name: 'logout',
    pattern: /^\/logout\/?$/,
    params: () => ({})
  },
  {
    name: 'admin-panel',
    pattern: /^\/admin-panel\/?$/,
    params: () => ({}),
    protected: true,
    adminOnly: true
  },
  {
    name: 'dashboard',
    pattern: /^\/dashboard\/?$/,
    params: () => ({}),
    protected: true
  },
  {
    name: 'project-tasks',
    pattern: /^\/projects\/([^/]+)\/tasks\/?$/,
    params: (match) => ({
      projectId: match[1]
    }),
    protected: true
  }
];