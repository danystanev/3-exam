import template from './logout.html?raw';
import './logout.css';
import { clearUser } from '../../state/auth.js';

export function renderPage() {
  return template;
}

export function bindPageActions({ navigateTo }) {
  clearUser();
  navigateTo('/', { replace: true });
}