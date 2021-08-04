import { Body, CacheInterceptor, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, SetMetadata, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '../utils/exceptionfilter';
import { IdentifyPipe } from '../utils/identify.pipe';
import { RolesGuard } from '../utils/roles.guard';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';

export class ForbiddenException extends HttpException {
    constructor() {
      super('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

    @Controller('contacts')
    export class ContactsController {
        constructor(private contactsService: ContactsService){}
    
        @Get()
        //@UseInterceptors(CacheInterceptor)
        index() {
          return this.contactsService.findAll();
        } 
        @Get('error')
        @UseFilters(HttpExceptionFilter)
        getHello(){
            throw new ForbiddenException();
        }
        @Get('guard')
        //@UseInterceptors(CacheInterceptor)
        @UseGuards(RolesGuard)
        @SetMetadata('roles','admin')
        getmessage(){
            return "hello this is me";
        }
        @Post('create')
        @UsePipes(ValidationPipe)
        @UsePipes(IdentifyPipe)
        async create(@Body() contactData: Contact): Promise<any> {
          return this.contactsService.create(contactData);
        }  
        @Put(':id/update')
        @UseFilters(HttpExceptionFilter)
        async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
            contactData.id = Number(id);
            if(!contactData.firstName){
                throw new ForbiddenException();
            }
            console.log('Update #' + contactData.id)
            return this.contactsService.update(contactData);
        }  
        @Patch(':id/update')
        async updateit(@Param('id') id, @Body() contactData: Contact): Promise<any> {
            contactData.id = Number(id);
            console.log('Update #' + contactData.id)
            return this.contactsService.update(contactData);
        }  
        @Delete(':id/delete')
        async delete(@Param('id') id): Promise<any> {
          return this.contactsService.delete(id);
        }     }
