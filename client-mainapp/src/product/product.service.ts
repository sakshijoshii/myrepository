import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindRelationsNotFoundError, getConnection, Repository } from 'typeorm';
import { Product1 } from './product1.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product1)
        private ProductRepository: Repository<Product1>,
    ) {}
    async  findAll(): Promise<Product1[]> {
        return await this.ProductRepository.find();
    }

        async findOne(id){
            return await this.ProductRepository.findOne(id);
        }
    

    async  create(contact: Product1): Promise<Product1> {
        return await this.ProductRepository.save(contact);
    }

    async update(id:number,contact: Product1): Promise<UpdateResult> {
        return await this.ProductRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.ProductRepository.delete(id);
    }
}
