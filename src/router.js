import { renderHeader } from './components/header/header.js';
import { renderFooter } from './components/footer/footer.js';
import { routes } from './routes.js';
import { bindHeaderActions } from './components/header/header.js';
import { applyTranslations, onLanguageChange } from './i18n/i18n.js';

function resolveRoute(pathname) {
  const matchedRoute = routes.find((route) => route.pattern.test(pathname));

  if (!matchedRoute) {
    return {
      name: 'not-found',
      params: {},
      pathname
    };
  }

  const match = pathname.match(matchedRoute.pattern);

  return {
    name: matchedRoute.name,
    params: matchedRoute.params(match),
    pathname
  };
}

async function renderRoute(pathname) {
  const app = document.querySelector('#app');
  const shell = app.querySelector('[data-shell]');
  const headerSlot = shell.querySelector('[data-header-slot]');
  const contentSlot = shell.querySelector('[data-content-slot]');
  const footerSlot = shell.querySelector('[data-footer-slot]');
  const route = resolveRoute(pathname);
  const pageModule = await import(`./pages/${route.name}/${route.name}.js`);

  headerSlot.innerHTML = renderHeader(route.pathname);
  contentSlot.innerHTML = pageModule.renderPage(route.params);
  footerSlot.innerHTML = renderFooter();
  applyTranslations(shell);

  if (typeof pageModule.bindPageActions === 'function') {
    pageModule.bindPageActions({
      navigateTo,
      renderRoute,
      pathname: route.pathname,
      params: route.params
    });
  }
}

export function navigateTo(pathname, { replace = false } = {}) {
  if (replace) {
    window.history.replaceState({}, '', pathname);
  } else {
    window.history.pushState({}, '', pathname);
  }

  renderRoute(pathname);
}

export function setupRouter() {
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[data-link]');

    if (!anchor) {
      return;
    }

    const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

    if (isModifiedClick || anchor.target === '_blank') {
      return;
    }

    event.preventDefault();
    navigateTo(anchor.getAttribute('href'));
  });

  window.addEventListener('popstate', () => {
    renderRoute(window.location.pathname);
  });

  bindHeaderActions(() => {
    navigateTo('/logout', { replace: true });
  });

  onLanguageChange(() => {
    renderRoute(window.location.pathname || '/');
  });

  renderRoute(window.location.pathname || '/');
}