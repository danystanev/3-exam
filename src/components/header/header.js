import template from './header.html?raw';
import './header.css';
import { getUser, isAdmin, isLoggedIn } from '../../state/auth.js';
import { getLanguage, setLanguage, t } from '../../i18n/i18n.js';

function buildNavigation(pathname) {
  const language = getLanguage();

  const sharedLinks = `
    <li class="nav-item">
      <a class="nav-link ${pathname === '/' ? 'active' : ''}" href="/" data-link>${t('nav.home')}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${pathname === '/recipes' ? 'active' : ''}" href="/recipes" data-link>${t('nav.recipes')}</a>
    </li>
  `;

  const guestLinks = `
    <li class="nav-item">
      <a class="nav-link ${pathname === '/login' ? 'active' : ''}" href="/login" data-link>${t('nav.login')}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${pathname === '/register' ? 'active' : ''}" href="/register" data-link>${t('nav.register')}</a>
    </li>
  `;

  const loggedLinks = `
    <li class="nav-item">
      <a class="nav-link ${pathname === '/my-recipes' ? 'active' : ''}" href="/my-recipes" data-link>${t('nav.myRecipes')}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${pathname === '/add-recipe' ? 'active' : ''}" href="/add-recipe" data-link>${t('nav.addRecipe')}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${pathname === '/profile' ? 'active' : ''}" href="/profile" data-link>${t('nav.profile')}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/logout" data-link id="logout-link">${t('nav.logout')}</a>
    </li>
  `;

  const adminLink = `
    <li class="nav-item">
      <a class="nav-link ${pathname === '/admin-panel' ? 'active' : ''}" href="/admin-panel" data-link>${t('nav.adminPanel')}</a>
    </li>
  `;

  const languageSwitcher = `
    <li class="nav-item d-flex align-items-center ms-lg-2">
      <span class="nav-link p-0 text-white-50 me-2">${t('common.languageLabel')}</span>
      <button class="btn btn-link nav-link p-0 ${language === 'bg' ? 'fw-bold text-white' : 'text-white-50'}" data-language="bg" type="button">BG</button>
      <span class="text-white-50 px-2">|</span>
      <button class="btn btn-link nav-link p-0 ${language === 'en' ? 'fw-bold text-white' : 'text-white-50'}" data-language="en" type="button">EN</button>
    </li>
  `;

  return `
    ${sharedLinks}
    ${isLoggedIn() ? `${loggedLinks}${isAdmin() ? adminLink : ''}` : guestLinks}
    ${languageSwitcher}
  `;
}

function setActiveLink(templateHtml, pathname) {
  const user = getUser();

  return templateHtml
    .replace('{{homeActive}}', pathname === '/' ? 'active' : '')
    .replace('{{loginActive}}', pathname === '/login' ? 'active' : '')
    .replace('{{dashboardActive}}', pathname === '/dashboard' ? 'active' : '')
    .replace('{{tasksActive}}', pathname.startsWith('/projects/') ? 'active' : '')
    .replace('{{navigationLinks}}', buildNavigation(pathname))
    .replace('{{userLabel}}', user?.username || user?.fullName || user?.email || t('common.guest'))
    .replace('{{brandLabel}}', t('common.appName'));
}

export function renderHeader(pathname) {
  return setActiveLink(template, pathname);
}

export function bindHeaderActions(onAuthChanged) {
  document.addEventListener('click', (event) => {
    const logoutLink = event.target.closest('#logout-link');
    const languageButton = event.target.closest('[data-language]');

    if (languageButton) {
      event.preventDefault();
      setLanguage(languageButton.getAttribute('data-language'));
      return;
    }

    if (!logoutLink) {
      return;
    }

    event.preventDefault();
    onAuthChanged();
  });
}