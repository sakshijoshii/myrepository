import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import { Cache } from 'cache-manager';

@Injectable()
export class ContactsService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache,
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
    ) { }
    async  findAll(){
        var contactslist = await this.cacheManager.get<Contact[]>('my-object1');
        if(contactslist){
            console.log("cache")
            return contactslist
        }
        var contactlist= await this.contactRepository.find()
        await this.cacheManager.set<Contact[]>('my-object1',contactlist,{ttl:100})
        var contactslist = await this.cacheManager.get<Contact[]>('my-object1');
        console.log('updated-cache')
        return contactslist
        //return this.contactRepository.find();
    }

    async  create(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }

    async update(contact: Contact): Promise<UpdateResult> {
        return await this.contactRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }
}
