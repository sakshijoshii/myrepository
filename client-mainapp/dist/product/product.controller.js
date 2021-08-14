"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product1_entity_1 = require("./product1.entity");
const product_service_1 = require("./product.service");
const microservices_1 = require("@nestjs/microservices");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createproduct(product) {
        await this.productService.create(product);
    }
    index() {
        return this.productService.findAll();
    }
    async updateproduct(id, product) {
        await this.productService.update(product.id, product);
    }
    async daleteproduct(id) {
        await this.productService.delete(id);
    }
};
__decorate([
    microservices_1.EventPattern('product_created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product1_entity_1.Product1]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createproduct", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "index", null);
__decorate([
    microservices_1.EventPattern('product_updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product1_entity_1.Product1]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateproduct", null);
__decorate([
    microservices_1.EventPattern('product_deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "daleteproduct", null);
ProductController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map