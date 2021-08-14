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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const product_entity_1 = require("./product.entity");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService, client) {
        this.productService = productService;
        this.client = client;
    }
    index() {
        return this.productService.findAll();
    }
    async get(id) {
        return this.productService.get(id);
    }
    async create(product) {
        const products = await this.productService.create(product);
        this.client.emit('product_created', products);
        return products;
    }
    async update(id, product) {
        await this.productService.update(product.id, product);
        const products = await this.productService.get(id);
        this.client.emit('product_updated', products);
        return products;
    }
    async delete(id) {
        await this.productService.delete(id);
        this.client.emit('product_deleted', id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "index", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "get", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
ProductController = __decorate([
    common_1.Controller('products'),
    __param(1, common_1.Inject('PRODUCT_SERVICE')),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        microservices_1.ClientProxy])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map