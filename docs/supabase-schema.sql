/* supabase-schema.sql */
create table movies (
  id serial primary key,
  title text,
  poster text
);

create table reviews (
  id serial primary key,
  movie_id int references movies(id),
  content text
);