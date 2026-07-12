create table public.profiles (
    id uuid not null,
    username text not null,
    avatar_url text,
    role text not null default 'user',
    created_at timestamptz default now(),
    updated_at timestamptz default now(),

    constraint profiles_pkey
        primary key (id),

    constraint profiles_username_key
        unique (username),

    constraint profiles_id_fkey
        foreign key (id)
        references auth.users(id)
        on delete cascade,

    constraint profiles_role_check
        check (role in ('user', 'admin'))
);

create trigger update_profiles_updated_at
before update on public.profiles
for each row
execute function update_updated_at_column();