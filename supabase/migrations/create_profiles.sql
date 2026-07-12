create table if not exists public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    username text,
    avatar_url text,
    role text default 'user',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);