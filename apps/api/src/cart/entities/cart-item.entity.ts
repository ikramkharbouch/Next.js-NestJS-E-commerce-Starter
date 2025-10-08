import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Product, { eager: true })
  product!: Product;

  @Column()
  productId!: string;

  @Column({ type: 'int' })
  quantity!: number;

  @ManyToOne(() => Cart, (cart) => cart.items)
  cart!: Cart;
}
