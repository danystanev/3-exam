import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabase.js';

const authListeners = new Set();

let currentUser = null;
let isInitialized = false;

function normalizeUser(user, profile = null) {
  if (!user) {
    return null;
  }

  const role = profile?.role ?? user.app_metadata?.role ?? user.user_metadata?.role ?? 'user';
  const username = profile?.username ?? user.user_metadata?.username ?? user.user_metadata?.full_name ?? user.user_metadata?.name ?? '';
  const avatarUrl = profile?.avatar_url ?? user.user_metadata?.avatar_url ?? '';
  const fullName = user.user_metadata?.full_name ?? user.user_metadata?.name ?? '';

  return {
    id: user.id,
    email: user.email ?? '',
    username,
    avatarUrl,
    fullName,
    role,
    profile,
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

async function loadProfile(userId) {
  const supabase = requireSupabaseClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, avatar_url, role, created_at, updated_at')
    .eq('id', userId)
    .maybeSingle();

  if (error) {
    return null;
  }

  return data;
}

async function syncCurrentUser(user) {
  if (!user) {
    setCurrentUser(null);
    return currentUser;
  }

  const profile = await loadProfile(user.id);
  currentUser = normalizeUser(user, profile);
  notifyListeners();
  return currentUser;
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
    await syncCurrentUser(data.session?.user ?? null);
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    void syncCurrentUser(session?.user ?? null);
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

  await syncCurrentUser(data.session?.user ?? data.user ?? null);
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

  await syncCurrentUser(data.session?.user ?? null);
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