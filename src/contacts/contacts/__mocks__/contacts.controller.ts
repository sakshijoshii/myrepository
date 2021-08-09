//import { contactStub } from "./stubs/contact.stub";
import { DeleteResult, UpdateResult } from "typeorm";
import { contactStub } from "../stubss/contact.stub";

export const ContactsController = jest.fn().mockReturnValue({
 index: jest.fn().mockResolvedValue([contactStub()]),
 create: jest.fn().mockResolvedValue(contactStub),
 update: jest.fn().mockResolvedValue(UpdateResult),
 delete: jest.fn().mockResolvedValue(DeleteResult)
})
