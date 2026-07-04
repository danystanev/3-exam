import template from './logout.html?raw';
import './logout.css';
import { logoutUser } from '../../state/auth.js';

export function renderPage() {
  return template;
}

export async function bindPageActions({ navigateTo }) {
  try {
    await logoutUser();
  } finally {
    navigateTo('/', { replace: true });
  }
}