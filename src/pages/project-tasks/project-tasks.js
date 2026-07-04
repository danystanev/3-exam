import template from './project-tasks.html?raw';
import './project-tasks.css';
import { t } from '../../i18n/i18n.js';

export function renderPage(params) {
  const projectTitle = t('pages.projectTasks.title', { projectId: params.projectId });
  return template.replace('{{projectTitle}}', projectTitle);
}