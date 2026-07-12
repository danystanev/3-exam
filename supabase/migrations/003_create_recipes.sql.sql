create table public.recipes (
    id uuid not null default gen_random_uuid(),

    title text not null,
    description text,

    ingredients text not null,
    instructions text not null,

    cooking_time integer,

    difficulty text,

    image_url text,

    owner_id uuid not null,

    category_id bigint,

    is_featured boolean default false,

    created_at timestamptz default now(),
    updated_at timestamptz default now(),

    constraint recipes_pkey
        primary key (id),

    constraint recipes_category_id_fkey
        foreign key (category_id)
        references public.categories(id)
        on delete set null,

    constraint recipes_owner_id_fkey
        foreign key (owner_id)
        references public.profiles(id)
        on delete cascade,

    constraint recipes_difficulty_check
        check (difficulty in ('Easy','Medium','Hard'))
);

create index idx_recipe_owner
on public.recipes(owner_id);

create index idx_recipe_category
on public.recipes(category_id);

create trigger update_recipes_updated_at
before update on public.recipes
for each row
execute function update_updated_at_column();