import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { title } from 'process';
import { UpdateResult } from 'typeorm';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService,
        @Inject('PRODUCT_SERVICE') private client: ClientProxy){}

    @Get()
    index() {
        //this.client.emit('hello','hello from rabbitmq')
      return this.productService.findAll();
    }   
    @Get()
    async get(@Param('id') id:number){
        return this.productService.get(id);
    }
    @Post('create')
    async create(
        @Body()product:Product 
    ) :Promise<Product>{
      const products = await this.productService.create(product);
      this.client.emit('product_created',products)
      return products;
    }
    @Put(':id')
    async update(
        @Param() id:number,@Body()product:Product 
    ) :Promise<any>{
    await this.productService.update(product.id,product);
     const products=await this.productService.get(id)
      this.client.emit('product_updated',products)
      return products;
    }  
    
     @Delete(':id')
     async delete(@Param('id') id:number){
         await this.productService.delete(id);
          
         this.client.emit('product_deleted',id);
     }
}
