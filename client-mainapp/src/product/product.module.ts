import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product1 } from './product1.entity';
import { ProductService } from './product.service';

@Module({
  imports:[TypeOrmModule.forFeature([Product1]),],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
