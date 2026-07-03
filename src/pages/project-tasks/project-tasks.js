import template from './project-tasks.html?raw';
import './project-tasks.css';

export function renderPage(params) {
  return template.replace('{{projectId}}', params.projectId);
}