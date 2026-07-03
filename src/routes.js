export const routes = [
  {
    name: 'home',
    pattern: /^\/$/,
    params: () => ({})
  },
  {
    name: 'login',
    pattern: /^\/login\/?$/,
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