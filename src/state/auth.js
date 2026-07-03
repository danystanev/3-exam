const AUTH_STORAGE_KEY = '3-exam-auth-user';

function readStoredUser() {
  const storedValue = window.localStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedValue) {
    return null;
  }

  try {
    return JSON.parse(storedValue);
  } catch {
    return null;
  }
}

export function getUser() {
  return readStoredUser();
}

export function setUser(user) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

export function clearUser() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function isLoggedIn() {
  return Boolean(getUser());
}

export function isAdmin() {
  return getUser()?.role === 'admin';
}