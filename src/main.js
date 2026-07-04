import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/global.css';

import { startApp } from './app.js';
import { initI18n } from './i18n/i18n.js';

initI18n();
startApp();