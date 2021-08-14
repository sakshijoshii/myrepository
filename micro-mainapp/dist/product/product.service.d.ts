import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class ProductService {
    private ProductRepository;
    constructor(ProductRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    get(id: number): Promise<Product>;
    create(contact: Product): Promise<Product>;
    update(id: number, contact: Product): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
