import template from './header.html?raw';
import './header.css';

function setActiveLink(templateHtml, pathname) {
  return templateHtml
    .replace('{{homeActive}}', pathname === '/' ? 'active' : '')
    .replace('{{loginActive}}', pathname === '/login' ? 'active' : '')
    .replace('{{dashboardActive}}', pathname === '/dashboard' ? 'active' : '')
    .replace('{{tasksActive}}', pathname.startsWith('/projects/') ? 'active' : '');
}

export function renderHeader(pathname) {
  return setActiveLink(template, pathname);
}