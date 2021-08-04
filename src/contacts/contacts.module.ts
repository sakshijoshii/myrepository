import { CacheModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contacts/contact.entity';
import { LoggerMiddleware } from './utils/logger.middleware';

@Module({
  imports: [CacheModule.register({
    ttl: 50, // seconds
    max: 100, // maximum number of items in cache
  }),
    TypeOrmModule.forFeature([Contact]),
  ],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {
  apply() {
    throw new Error('Method not implemented.');
  }
}
  
  
