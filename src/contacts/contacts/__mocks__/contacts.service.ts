//import { contactStub } from "./stubs/contact.stub";
import { DeleteResult, UpdateResult } from "typeorm";
import { contactStub } from "../stubss/contact.stub";

export const ContactsService = jest.fn().mockReturnValue({
 findAll: jest.fn().mockResolvedValue([contactStub()]),
 create: jest.fn().mockResolvedValue(contactStub),
 update: jest.fn().mockResolvedValue([contactStub()]),
 delete: jest.fn().mockResolvedValue([contactStub()])
})
