-- Cart Creation
insert into cart (id, user_id, status) values ('8f48ee15-b236-4ab6-bbde-888074ea1456', '3b0981e7-5fd8-41c3-8c62-ff383a4617e6', 'OPEN');
insert into cart (id, user_id, status) values ('795fcfde-d2d5-4ee2-a326-a5913fb398a4', 'dd68e338-cacb-4373-a0ed-d3cf07e585fc', 'OPEN');
insert into cart (id, user_id, status) values ('d27e653c-32d1-4d52-8489-0bc3d7cf3889', 'dbcbcdcb-6653-48c4-b714-bbebf635c739', 'ORDERED');
insert into cart (id, user_id, status) values ('33ab3733-4f15-483f-aa61-f2abee85675f', '8f10374f-55e4-4a73-8068-fb2ac06247c4', 'ORDERED');
insert into cart (id, user_id, status) values ('350bedc7-5e36-4346-a360-9be1a0bf8315', 'd241d569-e0cf-496a-a35a-90620da8bd4a', 'ORDERED');

-- Cart Items Creation
-- Cart #1
insert into cart_items (cart_id, product_id, count) values ('8f48ee15-b236-4ab6-bbde-888074ea1456', '23c76d6b-c7b7-4a77-b752-4f0404d8ad9e', 2);
insert into cart_items (cart_id, product_id, count) values ('8f48ee15-b236-4ab6-bbde-888074ea1456', 'd2f8f796-e30a-4296-877e-03d251375314', 1);
-- Cart #2
insert into cart_items (cart_id, product_id, count) values ('795fcfde-d2d5-4ee2-a326-a5913fb398a4', 'd365ff93-332f-418f-afb9-eb04ab9a8c87', 4);
insert into cart_items (cart_id, product_id, count) values ('795fcfde-d2d5-4ee2-a326-a5913fb398a4', '079aeba6-00cb-47db-a28e-b787673c4d88', 2);
insert into cart_items (cart_id, product_id, count) values ('795fcfde-d2d5-4ee2-a326-a5913fb398a4', '1a248bdb-d72b-4891-a398-6e25063a307a', 3);
-- Cart #3
insert into cart_items (cart_id, product_id, count) values ('d27e653c-32d1-4d52-8489-0bc3d7cf3889', '23c76d6b-c7b7-4a77-b752-4f0404d8ad9e', 16);
-- Cart #4
insert into cart_items (cart_id, product_id, count) values ('33ab3733-4f15-483f-aa61-f2abee85675f', '23c76d6b-c7b7-4a77-b752-4f0404d8ad9e', 44);
insert into cart_items (cart_id, product_id, count) values ('33ab3733-4f15-483f-aa61-f2abee85675f', '1a248bdb-d72b-4891-a398-6e25063a307a', 4);
-- Cart #5
insert into cart_items (cart_id, product_id, count) values ('350bedc7-5e36-4346-a360-9be1a0bf8315', '079aeba6-00cb-47db-a28e-b787673c4d88', 30);

