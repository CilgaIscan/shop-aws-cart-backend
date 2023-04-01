import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';

import { Order } from '../models';
import OrderEntity from 'src/database/entities/order.entity';

@Injectable()
export class OrderService {
  private orders: Record<string, Order> = {}

  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
  ) {}

  async findById(orderId: string): Promise<Order> {
    const entity = await this.orderRepo.findOneBy({id: orderId});
    return {
      ...entity,
    } as Order;
  }

  async create(data: any): Promise<Order> {
    const id = v4(v4())
    const order = {
      ...data,
      id,
      status: 'inProgress',
    };
    // TODO: call "repo.create()"

    this.orders[ id ] = order;

    return order;
  }

  async update(orderId: string, data: any): Promise<void> {
    const order = await this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    // TODO: call "repo.update()"
    this.orders[ orderId ] = {
      ...data,
      id: orderId,
    }
  }
}
