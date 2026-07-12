alter table public.recipes enable row level security;

create policy "Users can view own recipes"
on public.recipes
for select
to authenticated
using (owner_id = auth.uid());

create policy "Users can insert own recipes"
on public.recipes
for insert
to authenticated
with check (owner_id = auth.uid());

create policy "Users can update own recipes"
on public.recipes
for update
to authenticated
using (owner_id = auth.uid());

create policy "Users can delete own recipes"
on public.recipes
for delete
to authenticated
using (owner_id = auth.uid());

create policy "Admins can view all recipes"
on public.recipes
for select
to authenticated
using (
    exists (
        select 1
        from public.profiles
        where profiles.id = auth.uid()
        and profiles.role = 'admin'
    )
);

create policy "Admins can delete all recipes"
on public.recipes
for delete
to authenticated
using (
    exists (
        select 1
        from public.profiles
        where profiles.id = auth.uid()
        and profiles.role = 'admin'
    )
);