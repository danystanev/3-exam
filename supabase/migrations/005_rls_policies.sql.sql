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