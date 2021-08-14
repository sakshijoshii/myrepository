import { Product1 } from './product1.entity';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createproduct(product: Product1): Promise<void>;
    index(): Promise<Product1[]>;
    updateproduct(id: number, product: Product1): Promise<void>;
    daleteproduct(id: number): Promise<void>;
}
