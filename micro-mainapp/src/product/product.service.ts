import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private ProductRepository: Repository<Product>,
    ) {}
    async  findAll(): Promise<Product[]> {
        return await this.ProductRepository.find();
    }
     async get(id:number):Promise<Product>{
         return await this.ProductRepository.findOne(id)
     }

    async  create(contact: Product){
        return await this.ProductRepository.save(contact);
    }

    async update(id:number,contact: Product): Promise<UpdateResult> {
        return await this.ProductRepository.update(contact.id,contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.ProductRepository.delete(id);
    }
}
