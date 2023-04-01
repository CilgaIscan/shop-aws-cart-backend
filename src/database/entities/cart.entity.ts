import { CartStatus } from "src/cart/models";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import CartItem from "./cart-item.entity";

@Entity({name: 'carts'})
export default class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({
    type: 'uuid',
    nullable: false,
  })
  userId: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  createdAt: string;
  
  @Column({
    type: 'timestamp',
    nullable: false,
  })
  updatedAt: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  status: CartStatus;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  cart_items: CartItem[];
}