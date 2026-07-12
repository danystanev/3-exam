create table if not exists public.recipe_categories (
    id bigint generated always as identity primary key,
    name text not null unique
);

insert into public.recipe_categories (name)
values
('Breakfast'),
('Lunch'),
('Dinner'),
('Dessert'),
('Soup'),
('Salad'),
('Drink')
on conflict do nothing;