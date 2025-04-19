import { Component, input, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Contact } from '../contact';
import { Contacts } from '../data/contact-data';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  imports: [FormsModule],
  templateUrl: './update-contact.component.html',
  styleUrl: './update-contact.component.css',
})
export class UpdateContactComponent {
  id = input.required<number>();
  dataService = inject(DataService);
  contacts: Contact[] = Contacts;
  tempContact!: Contact;
  constructor(private router: Router) {}
  ngOnInit() {
    this.tempContact = this.dataService.getContactById(this.id());
  }
  saveContact() {
    this.router.navigate(['']);
  }
}
