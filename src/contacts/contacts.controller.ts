import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() contact: Contact) {
    return this.contactsService.create(contact);
  }

  @Get()
  async findAll() {
    return this.contactsService.findAll();
  }

  @Get(':phone')
  async findByPhone(@Param('phone') phone: string) {
    return this.contactsService.findByPhone(phone);
  }
}
