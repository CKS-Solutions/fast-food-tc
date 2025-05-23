import { Module } from '@nestjs/common';
import { ProductController } from '@controllers/product.controller';
import { ProductService } from '@services/product.service';
import { ProductRepository } from '@repositories/product.repository.impl';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductsModule {}
