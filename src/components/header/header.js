import template from './header.html?raw';
import './header.css';
import { clearUser, getUser, isAdmin, isLoggedIn } from '../../state/auth.js';

function buildNavigation(pathname) {
  const sharedLinks = `
    <li class="nav-item">
      <a class="nav-link ${pathname === '/' ? 'active' : ''}" href="/" data-link>Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${pathname === '/recipes' ? 'active' : ''}" href="/recipes" data-link>Recipes</a>
    </li>
  `;

  const guestLinks = `
    <li class="nav-item">
      <a class="nav-link ${pathname === '/login' ? 'active' : ''}" href="/login" data-link>Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${pathname === '/register' ? 'active' : ''}" href="/register" data-link>Register</a>
    </li>
  `;

  const loggedLinks = `
    <li class="nav-item">
      <a class="nav-link ${pathname === '/my-recipes' ? 'active' : ''}" href="/my-recipes" data-link>My Recipes</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${pathname === '/add-recipe' ? 'active' : ''}" href="/add-recipe" data-link>Add Recipe</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${pathname === '/profile' ? 'active' : ''}" href="/profile" data-link>Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/logout" data-link id="logout-link">Logout</a>
    </li>
  `;

  const adminLink = `
    <li class="nav-item">
      <a class="nav-link ${pathname === '/admin-panel' ? 'active' : ''}" href="/admin-panel" data-link>Admin Panel</a>
    </li>
  `;

  return `
    ${sharedLinks}
    ${isLoggedIn() ? `${loggedLinks}${isAdmin() ? adminLink : ''}` : guestLinks}
  `;
}

function setActiveLink(templateHtml, pathname) {
  return templateHtml
    .replace('{{homeActive}}', pathname === '/' ? 'active' : '')
    .replace('{{loginActive}}', pathname === '/login' ? 'active' : '')
    .replace('{{dashboardActive}}', pathname === '/dashboard' ? 'active' : '')
    .replace('{{tasksActive}}', pathname.startsWith('/projects/') ? 'active' : '')
    .replace('{{navigationLinks}}', buildNavigation(pathname))
    .replace('{{userLabel}}', getUser()?.email ?? 'Guest');
}

export function renderHeader(pathname) {
  return setActiveLink(template, pathname);
}

export function bindHeaderActions(onAuthChanged) {
  document.addEventListener('click', (event) => {
    const logoutLink = event.target.closest('#logout-link');

    if (!logoutLink) {
      return;
    }

    event.preventDefault();
    clearUser();
    onAuthChanged();
  });
}