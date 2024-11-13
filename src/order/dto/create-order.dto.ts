import { Orderitem } from 'src/orderitem/entities/orderitem.entity';

export class CreateOrderDto {
  items: [Orderitem];
  totalPrice: number;
  status: string;
}
