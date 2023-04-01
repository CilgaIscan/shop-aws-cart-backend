import { HttpModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService, ProductService } from './services';


@Module({
  imports: [ OrderModule, DatabaseModule, HttpModule ],
  providers: [ CartService, ProductService ],
  controllers: [ CartController ]
})
export class CartModule {}
