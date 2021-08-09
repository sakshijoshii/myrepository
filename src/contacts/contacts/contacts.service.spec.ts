import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { DeleteResult, UpdateResult } from 'typeorm';
//import { contactStub } from 'src/stubs/user.stub'
import { Contact } from './contact.entity';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { contactStub } from './stubss/contact.stub';
//import {contactStub} from './stubss/contact.stub'


//jest.mock("./contacts.service");
var newcontact:Contact= {
  id:1,
  firstName: "sakshi",
  lastName:"dgjh",
  phone:"dhgj",
  email:"dgj",
  city:"ufyh",
  country:"fhvj"
};

describe('ContactsService', () => {
  //let controller : ContactsController;
  let service: ContactsService;

  const mockContactRepository = {
    //find: jest.fn().mockImplementation(contactStub),
    save: jest.fn().mockImplementation(Contact => Contact),
    update: jest.fn().mockImplementation(newcontact => UpdateResult),
    delete: jest.fn().mockImplementation(newcontact => DeleteResult)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsService,{
        provide:getRepositoryToken(Contact),
        useValue:mockContactRepository
      }]
    })
    .compile();

    service =await module.get<ContactsService>(ContactsService);
    //controller = module.get<ContactsController>(ContactsController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
   /*describe('find',() => {
    describe('when find is called', () => {
      let contacts:Contact[];
      beforeEach(async () =>{
        contacts =await service.find()
      })

      test('then it should call findAll',() => {
        expect(mockContactRepository.find).toBeCalled()
      })

      test('then it should return all users',() => {
       expect(contacts).toEqual(contactStub())
      })
    })*/

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
          contact = await service.create(newcontact);
        })
  
        test('then it should call create',() => {
          expect(mockContactRepository.save).toHaveBeenCalled()
        })
  
        test('then it should return a user',() => {
         expect(contact).toEqual(contactStub())
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
        expect(mockContactRepository.update).toHaveBeenCalledWith(newcontact.id,newcontact)
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
      expect(mockContactRepository.delete).toHaveBeenCalledWith(newcontact.id)
    })

    test('then it should return the array after deleting a contact',() => {
     expect(contact).toEqual(DeleteResult);
    })
  })
} )
   })
