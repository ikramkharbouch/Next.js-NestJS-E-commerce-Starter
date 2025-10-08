import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order} from './entities/order.entity';
import { OrderItem} from './entities/order-item.entity';
import { CartService } from '../cart/cart.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly cartService: CartService,
    private readonly productsService: ProductsService,
  ) {}

  async createFromCart(cartId: string, userId: string): Promise<Order> {
    const cart = await this.cartService.findOne(cartId);

    if (cart.items.length === 0) {
      throw new BadRequestException('Cannot create an order from an empty cart.');
    }

    const newOrder = new Order();
    newOrder.userId = userId;
    newOrder.items = [];
    let total = 0;

    for (const cartItem of cart.items) {
      const orderItem = new OrderItem();
      orderItem.productId = cartItem.productId;
      orderItem.name = cartItem.product.name;
      orderItem.price = cartItem.product.price;
      orderItem.quantity = cartItem.quantity;
      newOrder.items.push(orderItem);
      total += cartItem.product.price * cartItem.quantity;
    }

    newOrder.total = total;

    return this.orderRepository.save(newOrder);
  }

  async findUserOrders(userId: string): Promise<Order[]> {
    return this.orderRepository.find({
        where: { userId },
        relations: ['items'],
        order: { createdAt: 'DESC' },
    });
  }
}
