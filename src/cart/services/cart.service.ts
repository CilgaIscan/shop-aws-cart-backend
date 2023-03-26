import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { v4 } from 'uuid';

import { Cart, CartItem, CartStatus } from '../models';

import CartEntity from 'src/database/entities/cart.entity';
import CartItemEntity from 'src/database/entities/cart-item.entity';
import { ProductService } from './product.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepo: Repository<CartEntity>,
    @InjectRepository(CartItemEntity)
    private readonly cartItemRepo: Repository<CartItemEntity>,
    private readonly productService: ProductService,
  ) { }

  async findByUserId(userId: string): Promise<Cart> {
    const entities = (await this.cartRepo.find(
      {
        where: { userId, status: CartStatus.OPEN },
        relations: {
          cart_items: true,
        },
      }
    ));

    if (entities.length === 0) {
      return null;
    }

    const entity = entities[0];

    const items = []
    for (const ci of entity.cart_items) {
      const product = await this.productService.findById(ci.productId);
      const count = ci.count;

      items.push({
        product,
        count,
      });
    }

    return {
      id: entity.id,
      items,
      status: entity.status
    } as Cart;
  }

  async createByUserId(userId: string): Promise<Cart> {
    const id = v4(v4());

    const userCart: CartEntity = await this.cartRepo.save({
      id,
      userId,
      status: CartStatus.OPEN,
    });

    return { id: userCart.id, items: [] } as Cart;
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { items }: Cart): Promise<Cart> {
    const cart = await this.findOrCreateByUserId(userId);

    await this.updateWithItems(cart, items);

    return {
      id: cart.id,
      items: [...items],
      status: cart.status
    };
  }

  async removeByUserId(userId: string): Promise<void> {
    const cart = await this.cartRepo.findOneBy({ userId });
    if (cart) {
      const cartItemsToDelete: CartItemEntity[] = await this.cartItemRepo.find({
        where: {
          cart: {
            id: cart.id,
          }
        },
      });

      for (const cartItem of cartItemsToDelete) {
        await this.cartItemRepo.remove(cartItem);
      }
      
      await this.cartRepo.remove(cart);
    }
  }

  async changeStatus(cartId: string, status: CartStatus) {
    const cart = await this.cartRepo.findOneBy({id: cartId});
    if (cart) {
      cart.status = status;
      return await this.cartRepo.save(cart);
    }
  }

  private async updateWithItems(cart: Cart, items: CartItem[]) {
    for (const item of items) {
      const dataToSave = {
        cart: cart,
        productId: item.product.id,
        count: item.count,
      };

      const dbItems = await this.cartItemRepo.find({
        where: {
          productId: item.product.id,
          cart: {
            id: cart.id,
          }
        },
        relations: [
          'cart',
        ]
      });

      if (dbItems.length > 0) {
        dataToSave['id'] = dbItems[0].id;
      }

      await this.cartItemRepo.save(dataToSave);
    }
  }
}
