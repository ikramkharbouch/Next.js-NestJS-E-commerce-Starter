import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { AddItemDto } from './dto/add-item.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private readonly productsService: ProductsService,
  ) {}

  // Creates a new, empty cart in the database.
  async create(): Promise<Cart> {
    const newCart = this.cartRepository.create({ items: [] });
    return this.cartRepository.save(newCart);
  }

  async findOne(id: string): Promise<Cart> {
    const cart = await this.cartRepository.findOneBy({ id });
    if (!cart) {
      throw new NotFoundException(`Cart with ID "${id}" not found`);
    }
    return cart;
  }

  async addItem(cartId: string, addItemDto: AddItemDto): Promise<Cart> {
    const cart = await this.findOne(cartId);
    const product = await this.productsService.findOne(addItemDto.productId);

    const existingItem = cart.items.find(
      (item) => item.productId === addItemDto.productId,
    );

    if (existingItem) {
      existingItem.quantity += addItemDto.quantity;
    } else {
      const newCartItem = new CartItem();
      newCartItem.product = product;
      newCartItem.productId = product.id;
      newCartItem.quantity = addItemDto.quantity;
      cart.items.push(newCartItem);
    }

    return this.cartRepository.save(cart);
  }
}