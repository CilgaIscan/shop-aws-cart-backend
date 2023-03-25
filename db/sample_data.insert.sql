-- Cart Creation
insert into cart (id, user_id, status) values ('8f48ee15-b236-4ab6-bbde-888074ea1456', '3b0981e7-5fd8-41c3-8c62-ff383a4617e6', 'OPEN');
insert into cart (id, user_id, status) values ('795fcfde-d2d5-4ee2-a326-a5913fb398a4', 'dd68e338-cacb-4373-a0ed-d3cf07e585fc', 'OPEN');
insert into cart (id, user_id, status) values ('d27e653c-32d1-4d52-8489-0bc3d7cf3889', 'dbcbcdcb-6653-48c4-b714-bbebf635c739', 'ORDERED');
insert into cart (id, user_id, status) values ('33ab3733-4f15-483f-aa61-f2abee85675f', '8f10374f-55e4-4a73-8068-fb2ac06247c4', 'ORDERED');
insert into cart (id, user_id, status) values ('350bedc7-5e36-4346-a360-9be1a0bf8315', 'd241d569-e0cf-496a-a35a-90620da8bd4a', 'ORDERED');

-- Cart Items Creation
-- Cart #1
insert into cart_items (cart_id, product_id, count) values ('8f48ee15-b236-4ab6-bbde-888074ea1456', 'a53eedd8-f0e4-464a-900a-e975ab696ee5', 2);
insert into cart_items (cart_id, product_id, count) values ('8f48ee15-b236-4ab6-bbde-888074ea1456', '14627aa5-9c90-40a3-8ff0-9fa08203d55d', 1);
-- Cart #2
insert into cart_items (cart_id, product_id, count) values ('795fcfde-d2d5-4ee2-a326-a5913fb398a4', '0daa21aa-d06b-4a8a-bbcf-cb005a46eece', 4);
insert into cart_items (cart_id, product_id, count) values ('795fcfde-d2d5-4ee2-a326-a5913fb398a4', '82aa2597-0f75-439a-9744-481057663906', 2);
insert into cart_items (cart_id, product_id, count) values ('795fcfde-d2d5-4ee2-a326-a5913fb398a4', 'dd269bf4-aad0-43e7-a4b5-659724694b04', 3);
-- Cart #3
insert into cart_items (cart_id, product_id, count) values ('d27e653c-32d1-4d52-8489-0bc3d7cf3889', 'a53eedd8-f0e4-464a-900a-e975ab696ee5', 16);
-- Cart #4
insert into cart_items (cart_id, product_id, count) values ('33ab3733-4f15-483f-aa61-f2abee85675f', 'a53eedd8-f0e4-464a-900a-e975ab696ee5', 44);
insert into cart_items (cart_id, product_id, count) values ('33ab3733-4f15-483f-aa61-f2abee85675f', 'dd269bf4-aad0-43e7-a4b5-659724694b04', 4);
-- Cart #5
insert into cart_items (cart_id, product_id, count) values ('350bedc7-5e36-4346-a360-9be1a0bf8315', '82aa2597-0f75-439a-9744-481057663906', 30);

