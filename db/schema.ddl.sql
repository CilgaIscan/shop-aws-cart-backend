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
