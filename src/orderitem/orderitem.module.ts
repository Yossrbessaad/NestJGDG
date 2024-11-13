import { Module } from '@nestjs/common';
import { OrderitemService } from './orderitem.service';
import { OrderitemController } from './orderitem.controller';
import { Orderitem, OrderitemSchema } from './entities/orderitem.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Orderitem.name, schema: OrderitemSchema },
    ]),
  ],
  controllers: [OrderitemController],
  providers: [OrderitemService],
})
export class OrderitemModule {}
