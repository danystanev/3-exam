-- Profiles table for Supabase Auth users.
-- Run this in the Supabase SQL editor or as a migration.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null unique,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  generated_username text;
begin
  generated_username := lower(
    regexp_replace(
      coalesce(
        new.raw_user_meta_data ->> 'username',
        new.raw_user_meta_data ->> 'full_name',
        split_part(new.email, '@', 1)
      ),
      '[^a-zA-Z0-9]+',
      '_',
      'g'
    )
  );

  insert into public.profiles (id, username, avatar_url, role)
  values (
    new.id,
    nullif(generated_username, ''),
    new.raw_user_meta_data ->> 'avatar_url',
    'user'
  );

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.handle_profile_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_profiles_updated_at on public.profiles;

create trigger on_profiles_updated_at
before update on public.profiles
for each row execute function public.handle_profile_updated_at();

drop policy if exists "Profiles are viewable by owners" on public.profiles;

create policy "Profiles are viewable by owners"
  on public.profiles
  for select
  using (auth.uid() = id);

drop policy if exists "Profiles are insertable by owners" on public.profiles;

create policy "Profiles are insertable by owners"
  on public.profiles
  for insert
  with check (auth.uid() = id);

drop policy if exists "Profiles are updatable by owners" on public.profiles;

create policy "Profiles are updatable by owners"
  on public.profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);