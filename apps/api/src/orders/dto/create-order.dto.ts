import { IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  cartId!: string;
}
