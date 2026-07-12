create table if not exists public.recipes (
    id bigint generated always as identity primary key,

    title text not null,
    description text,
    ingredients text not null,
    instructions text not null,

    cooking_time integer,
    difficulty text,

    image_url text,

    category_id bigint references public.recipe_categories(id),

    owner_id uuid references public.profiles(id),

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);