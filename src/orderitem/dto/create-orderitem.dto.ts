import { Prop, Schema } from '@nestjs/mongoose';
@Schema()
export class CreateOrderitemDto {
  @Prop()
  quantity: number;
}
