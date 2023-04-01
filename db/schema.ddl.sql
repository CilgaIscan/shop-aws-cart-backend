-- preps
create extension if not exists "uuid-ossp";

-- carts:
--     id - uuid (Primary key)
--     user_id - uuid, not null (It's not Foreign key, because there is no user entity in DB)
--     created_at - date, not null
--     updated_at - date, not null
--     status - enum ("OPEN", "ORDERED") 

create table cart (
	id uuid not null default uuid_generate_v4() primary key,
	user_id uuid not null,
	created_at timestamp default current_timestamp,
	updated_at timestamp default NOW(),
	status text not null
);

-- cart_items:
--   cart_id - uuid (Foreign key from carts.id)
--   product_id - uuid
--   count - integer (Number of items in a cart)

create table cart_items (
	cart_id uuid not null references cart(id),
	product_id uuid not null,
	count integer not null default 0
);

ALTER TABLE cart_items ADD COLUMN id SERIAL PRIMARY KEY;

create table users (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" text NOT NULL,
	email text NULL,
	"password" text NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id)
);

-- orders:
--   id - uuid
--   user_id - uuid
--   cart_id - uuid (Foreign key from carts.id)
--   payment - JSON
--   delivery - JSON
--   comments - text
--   status - ENUM or text
--   total - number
create table orders (
	id uuid not null default uuid_generate_v4() primary key,
	user_id uuid not null references users(id),
	cart_id uuid not null references carts(id),
	payment JSON not null,
	delivery JSON not null,
	comments text,
	status text not null,
	total numeric not null
);
