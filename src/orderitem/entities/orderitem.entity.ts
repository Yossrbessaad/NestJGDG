import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Orderitem {
  @Prop()
  quantity: number;
}
export const OrderitemSchema = SchemaFactory.createForClass(Orderitem);
