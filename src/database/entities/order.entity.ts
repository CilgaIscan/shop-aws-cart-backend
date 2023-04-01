import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Order as OrderModel } from "src/order/models";
import { CartItem } from "src/cart";


@Entity()
export default class Order implements OrderModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  userId: string;
  cartId: string;
  items: CartItem[];
  payment: { type: string; address?: any; creditCard?: any; };
  delivery: { type: string; address: any; };
  comments: string;
  status: string;
  total: number;
}