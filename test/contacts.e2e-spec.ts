import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ContactsModule } from '../src/contacts/contacts.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { contactStub } from '../src/contacts/contacts/stubss/contact.stub';
import { Contact } from '../src/contacts/contacts/contact.entity';
import { ContactsService } from '../src/contacts/contacts/__mocks__/contacts.service';
import { DeleteResult, UpdateResult } from 'typeorm';
//jest.mock("../src/contacts.service");

describe('ContactsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ContactsModule],
    }).overrideProvider(getRepositoryToken(Contact)).useValue(ContactsService).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Contacts/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/contacts')
      .expect(contactStub)
      //.expect('Hello World!');
  });
  it('Contacts/create (POST)', () => {
    return request(app.getHttpServer())
      .post('/contacts/create')
      .send({
        id:1,
        firstName: "sakshi",
        lastName:"dgjh",
        phone:"dhgj",
        email:"dgj",
        city:"ufyh",
        country:"fhvj"
      })
      .expect(contactStub)
      //.expect('Hello World')
  })
  it('Contacts/:id/update (PUT)', () => {
    return request(app.getHttpServer())
      .put('/contacts/:id/update')
          .send({
            id:1,
            firstName: "sakshi",
            lastName:"dgjh",
            phone:"dhgj",
            email:"dgj",
            city:"ufyh",
            country:"fhvj"
          })
      .expect(contactStub)
      //.expect('Hello World')
  })
  it('Contacts/:id/delete (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/contacts/:id/delete')
      .send({
        id:1
      })
      
      .expect(DeleteResult)
      //.expect('Hello World')
  })
});
