import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Product {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  stock: number;
  @Prop()
  categoryId: string;
}
export const productSchema = SchemaFactory.createForClass(Product);
