import bg from './bg.js';
import en from './en.js';

const STORAGE_KEY = '3-exam-language';
const SUPPORTED_LANGUAGES = ['en', 'bg'];

const dictionaries = {
  en,
  bg
};

const listeners = new Set();

function normalizeLanguage(language) {
  if (!language) {
    return null;
  }

  const lower = language.toLowerCase();
  const short = lower.split('-')[0];

  return SUPPORTED_LANGUAGES.includes(short) ? short : null;
}

function detectBrowserLanguage() {
  const candidates = [
    ...(navigator.languages || []),
    navigator.language,
    navigator.userLanguage,
    'en'
  ].filter(Boolean);

  for (const candidate of candidates) {
    const normalized = normalizeLanguage(candidate);

    if (normalized) {
      return normalized;
    }
  }

  return 'en';
}

let currentLanguage = normalizeLanguage(window.localStorage.getItem(STORAGE_KEY)) || detectBrowserLanguage();

function getByPath(source, path) {
  return path.split('.').reduce((accumulator, key) => {
    if (accumulator && Object.prototype.hasOwnProperty.call(accumulator, key)) {
      return accumulator[key];
    }

    return undefined;
  }, source);
}

function interpolate(template, params = {}) {
  return String(template).replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      return String(params[key]);
    }

    return '';
  });
}

export function getLanguage() {
  return currentLanguage;
}

export function t(key, params = {}) {
  const activeDictionary = dictionaries[currentLanguage] || dictionaries.en;
  const fallbackDictionary = dictionaries.en;
  const value = getByPath(activeDictionary, key) ?? getByPath(fallbackDictionary, key);

  if (value === undefined) {
    return key;
  }

  return interpolate(value, params);
}

export function applyTranslations(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key);
  });

  root.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.setAttribute('placeholder', t(key));
  });

  root.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const key = element.getAttribute('data-i18n-title');
    element.setAttribute('title', t(key));
  });

  root.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.getAttribute('data-i18n-aria-label');
    element.setAttribute('aria-label', t(key));
  });

  document.documentElement.lang = currentLanguage;
}

export function setLanguage(language) {
  const normalized = normalizeLanguage(language);

  if (!normalized || normalized === currentLanguage) {
    return;
  }

  currentLanguage = normalized;
  window.localStorage.setItem(STORAGE_KEY, normalized);
  document.documentElement.lang = normalized;
  listeners.forEach((listener) => listener(normalized));
}

export function onLanguageChange(listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function initI18n() {
  document.documentElement.lang = currentLanguage;
}