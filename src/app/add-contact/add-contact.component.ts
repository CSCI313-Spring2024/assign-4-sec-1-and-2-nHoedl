import { Component, inject } from '@angular/core';
import { Contact } from '../contact';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from '../data/contact-data';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  contacts: Contact[] = Contacts;
  dataService = inject(DataService)
  constructor(private router:Router){}

    newContact: Contact = {
    id: 0,
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email@gmail.com',
    phoneNumber: '555-123-4567'
  };

  addContact() {
    this.newContact.id = this.dataService.getContactSize();
  
    this.contacts.push({ ...this.newContact });
  
    console.log(this.newContact);
  
    // Reset the form
    this.newContact = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    };
  
    // Navigate back
    this.router.navigate([""]);
  }
}
