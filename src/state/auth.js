import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabase.js';

const authListeners = new Set();

let currentUser = null;
let isInitialized = false;
let authSubscription = null;

function normalizeUser(user) {
  if (!user) {
    return null;
  }

  const role = user.app_metadata?.role ?? user.user_metadata?.role ?? 'user';
  const fullName = user.user_metadata?.full_name ?? user.user_metadata?.name ?? '';

  return {
    id: user.id,
    email: user.email ?? '',
    fullName,
    role,
    userMetadata: user.user_metadata ?? {},
    appMetadata: user.app_metadata ?? {}
  };
}

function notifyListeners() {
  authListeners.forEach((listener) => listener(currentUser));
}

function setCurrentUser(user) {
  currentUser = normalizeUser(user);
  notifyListeners();
}

function requireSupabaseClient() {
  const client = getSupabaseClient();

  if (!client) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.');
  }

  return client;
}

export async function initAuth() {
  if (isInitialized) {
    return currentUser;
  }

  if (!isSupabaseConfigured()) {
    isInitialized = true;
    currentUser = null;
    notifyListeners();
    return currentUser;
  }

  const supabase = requireSupabaseClient();
  const { data, error } = await supabase.auth.getSession();

  if (!error) {
    setCurrentUser(data.session?.user ?? null);
  }

  authSubscription = supabase.auth.onAuthStateChange((_event, session) => {
    setCurrentUser(session?.user ?? null);
  });

  isInitialized = true;
  return currentUser;
}

export function subscribeToAuthChanges(listener) {
  authListeners.add(listener);
  listener(currentUser);

  return () => {
    authListeners.delete(listener);
  };
}

export function getUser() {
  return currentUser;
}

export function isLoggedIn() {
  return Boolean(currentUser);
}

export function isAdmin() {
  return currentUser?.role === 'admin';
}

export async function loginWithPassword({ email, password }) {
  const supabase = requireSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw error;
  }

  setCurrentUser(data.session?.user ?? data.user ?? null);
  return currentUser;
}

export async function registerUser({ fullName, email, password }) {
  const supabase = requireSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: 'user'
      }
    }
  });

  if (error) {
    throw error;
  }

  setCurrentUser(data.session?.user ?? null);
  return {
    session: data.session,
    user: data.user
  };
}

export async function logoutUser() {
  const supabase = requireSupabaseClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }

  setCurrentUser(null);
}