import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/Product.entity';
import { Transaction } from './entities/Transaction.entity';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Transaction])],
  providers: [ProductsService, ProductsResolver]
})
export class ProductsModule {}
