import { Repository } from 'typeorm';
import { Product1 } from './product1.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class ProductService {
    private ProductRepository;
    constructor(ProductRepository: Repository<Product1>);
    findAll(): Promise<Product1[]>;
    findOne(id: any): Promise<Product1>;
    create(contact: Product1): Promise<Product1>;
    update(id: number, contact: Product1): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
