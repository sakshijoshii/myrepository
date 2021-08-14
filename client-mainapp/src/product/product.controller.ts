import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product1 } from './product1.entity';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService){}

    @EventPattern('product_created')
    async createproduct(product:Product1){
      await this.productService.create(product)
    }
    /*@EventPattern('hello')
    async hello(data:string){
    console.log(data);
    }*/
    @Get()
    index(): Promise<Product1[]> {
      return this.productService.findAll();
    }   
    /*@Post('create')
    async create(@Body() contactData: Product1): Promise<any> {
      return this.productService.create(contactData);
    } */
    @EventPattern('product_updated')
    async updateproduct(id:number,product:Product1){
      await this.productService.update(product.id,product)
    }
    @EventPattern('product_deleted')
    async daleteproduct(id:number){
      await this.productService.delete(id)
    }

}
