import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Contact } from '../contact';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  dataService = inject(DataService)
  contacts: Contact[] = [];

  delete(id:number){
    this.contacts.splice(id, 1)
  }
  
  ngOnInit(){
    this.contacts = this.dataService.contacts;
}
}
