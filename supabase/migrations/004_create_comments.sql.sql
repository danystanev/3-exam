create table public.comments (
    id uuid not null default gen_random_uuid(),

    recipe_id uuid not null,

    user_id uuid not null,

    content text not null,

    created_at timestamptz default now(),

    constraint comments_pkey
        primary key (id),

    constraint comments_recipe_id_fkey
        foreign key (recipe_id)
        references public.recipes(id)
        on delete cascade,

    constraint comments_user_id_fkey
        foreign key (user_id)
        references public.profiles(id)
        on delete cascade
);

create index idx_comment_recipe
on public.comments(recipe_id);

create index idx_comment_user
on public.comments(user_id);