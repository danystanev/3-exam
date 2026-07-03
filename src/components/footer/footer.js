import template from './footer.html?raw';
import './footer.css';

export function renderFooter() {
  return template.replace('{{year}}', String(new Date().getFullYear()));
}