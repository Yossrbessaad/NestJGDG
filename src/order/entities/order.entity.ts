import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Orderitem } from 'src/orderitem/entities/orderitem.entity';
export type OrderDocument = HydratedDocument<Order>;
@Schema()
export class Order {
  @Prop()
  items: [Orderitem];
  @Prop()
  totalPrice: number;
  @Prop()
  status: string;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
