import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ContactsModule } from 'src/contacts/contacts.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { contactStub } from 'src/contacts/contacts/stubss/contact.stub';
jest.mock("./contacts.service");

describe('ContactsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ContactsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Contacts/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/contacts')
      .expect(200)
      .expect(contactStub)
      //.expect('Hello World!');
  });
});
