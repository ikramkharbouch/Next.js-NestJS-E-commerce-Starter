import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('checkout')
  createOrder(@Request() req: any, @Body() createOrderDto: CreateOrderDto) {
    // req.user is populated by JwtAuthGuard and contains { userId, email }
    return this.ordersService.createFromCart(createOrderDto.cartId, req.user.userId);
  }

  @Get()
  findMyOrders(@Request() req: any) {
    return this.ordersService.findUserOrders(req.user.userId);
  }
}