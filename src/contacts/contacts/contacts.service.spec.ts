import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { DeleteResult, UpdateResult } from 'typeorm';
//import { contactStub } from 'src/stubs/user.stub'
import { Contact } from './contact.entity';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { contactStub } from './stubss/contact.stub';
//import {contactStub} from './stubss/contact.stub'


jest.mock("./contacts.service");

describe('ContactsService', () => {
  //let controller : ContactsController;
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      //controllers:[ContactsController],
      providers: [ContactsService],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
    //controller = module.get<ContactsController>(ContactsController);
  });

  /*it('should be defined', () => {
    expect(service).toBeDefined();
  });*/
  describe('findAll',() => {
    describe('when findAll is called', () => {
      let contacts:Contact[];
      beforeEach(async () =>{
        contacts =await service.findAll()
      })

      test('then it should call findAll',() => {
        expect(service.findAll).toBeCalled()
      })

      test('then it should return all users',() => {
       expect(contacts).toEqual([contactStub()])
      })
    })

    describe('create',() => {
      describe('when create is called', () => {
        let contact:Contact;
        let newcontact:Contact= {
          id:1,
          firstName: "sakshi",
          lastName:"dgjh",
          phone:"dhgj",
          email:"dgj",
          city:"ufyh",
          country:"fhvj"
        };
        beforeEach(async () =>{
          contact = await service.create(contactStub());
        })
  
        test('then it should call create',() => {
          expect(service.create).toHaveBeenCalledWith(newcontact)
        })
  
        test('then it should return a user',() => {
         expect(contact).toEqual(contactStub)
        })
      })
  } )

  describe('update',() => {
    describe('when update is called', () => {
      let contact;
      let newcontact:Contact= {
        id:1,
        firstName: "sakshi",
        lastName:"dgjh",
        phone:"dhgj",
        email:"dgj",
        city:"ufyh",
        country:"fhvj"
      };
      beforeEach(async () =>{
       contact = await service.update(contactStub())
      })

      test('then it should call update',() => {
        expect(service.update).toHaveBeenCalledWith(newcontact)
      })

      test('then it should return an updated array of contatcs',() => {
       expect(contact).toEqual(UpdateResult)
      })
    })
} )

describe('delete',() => {
  describe('when delete is called', () => {
    let contact;
    let newcontact:Contact= {
      id:1,
      firstName:"dg",
      lastName:"dg",
      phone:"567",
      email:"dgh",
      city:"syh",
      country:"sgj"
    };
    beforeEach(async () =>{
      contact =await service.delete(contactStub().id)
    })

    test('then it should call delete',() => {
      expect(service.delete).toHaveBeenCalledWith(newcontact.id)
    })

    test('then it should return the array after deleting a contact',() => {
     expect(contact).toEqual(DeleteResult);
    })
  })
} )
  })
})