import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import SnakeNamingStrategy from 'typeorm-naming-strategy';
import CartItem from './entities/cart-item.entity';
import Cart from './entities/cart.entity';
import User from './entities/user.entity';
import Order from './entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        Cart,
        CartItem,
        Order,
        User,
      ],
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TypeOrmModule.forFeature([
      Cart, 
      CartItem,
      User,
      Order,
    ])
  ],
  exports: [
    TypeOrmModule,
  ]
})
export class DatabaseModule {}
