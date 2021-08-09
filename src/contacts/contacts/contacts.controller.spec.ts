import { Test, TestingModule } from '@nestjs/testing';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Contact } from './contact.entity';
//import { ContactsController } from './contacts.controller';
import { ContactsController } from './contacts.controller';
import { contactStub } from './stubss/contact.stub';
jest.mock("./contacts.controller");

describe('ContactsController', () => {
  let controller: ContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll',() => {
    describe('when findAll is called', () => {
      let contacts:Contact[];
      beforeEach(async () =>{
        contacts =await controller.index()
      })

      test('then it should call findAll',() => {
        expect(controller.index).toBeCalled()
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
          contact = await controller.create(contactStub());
        })
  
        test('then it should call create',() => {
          expect(controller.create).toHaveBeenCalledWith(newcontact)
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
       contact = await controller.update(contactStub().id,contactStub())
      })

      test('then it should call update',() => {
        expect(controller.update).toHaveBeenCalledWith(newcontact.id,newcontact)
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
      contact =await controller.delete(contactStub().id)
    })

    test('then it should call delete',() => {
      expect(controller.delete).toHaveBeenCalledWith(newcontact.id)
    })

    test('then it should return the array after deleting a contact',() => {
     expect(contact).toEqual(DeleteResult);
    })
  })
} )
  })
})
