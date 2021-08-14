"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqps://xdxhblij:Z9DbUqKU8u323awT2EVkm7g_Bn0Ck6xZ@elk.rmq2.cloudamqp.com/xdxhblij'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        }
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=listner.js.map