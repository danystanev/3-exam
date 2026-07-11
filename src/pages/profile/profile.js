import template from './profile.html?raw';
import './profile.css';
import { getUser } from '../../state/auth.js';

export function renderPage() {
  return template;
}

export function bindPageActions() {
  const user = getUser();

  if (!user) {
    return;
  }

  document.querySelector('#profile-name').textContent =
    user.fullName || '-';

  document.querySelector('#profile-email').textContent =
    user.email || '-';

  document.querySelector('#profile-username').textContent =
    user.username || '-';

  document.querySelector('#profile-role').textContent =
    user.role || 'user';
}