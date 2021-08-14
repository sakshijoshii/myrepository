import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports:[TypeOrmModule.forFeature([Product]),
  ClientsModule.register([
    {
      name: 'PRODUCT_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://xdxhblij:Z9DbUqKU8u323awT2EVkm7g_Bn0Ck6xZ@elk.rmq2.cloudamqp.com/xdxhblij'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    },]),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
