import { Injectable } from '@angular/core';
import { Contacts } from './data/contact-data';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  contacts = Contacts;

  getContactById(id: number): Contact {
    return this.contacts.filter((contact) => contact.id == id)[0];
  }

  getContactSize() {
    return this.contacts.length;
  }

  constructor() {}
}
