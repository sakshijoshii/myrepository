import { ClientProxy } from '@nestjs/microservices';
import { Product } from './product.entity';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    private client;
    constructor(productService: ProductService, client: ClientProxy);
    index(): Promise<Product[]>;
    get(id: number): Promise<Product>;
    create(product: Product): Promise<Product>;
    update(id: number, product: Product): Promise<any>;
    delete(id: number): Promise<void>;
}
