import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Cart from "./cart.entity";

@Entity({name: 'cart_items'})
export default class CartItem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Cart, (cart) => cart.id)
  @JoinColumn({name: 'cart_id', referencedColumnName: 'id'})
  cart: Cart;

  @Column({
    type: 'uuid',
    nullable: false,
  })
  productId: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  count: number;
}