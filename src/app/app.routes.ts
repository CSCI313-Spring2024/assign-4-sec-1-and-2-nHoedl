import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

export const routes: Routes = [
    {
        //path: URL, 
        //component: component to display/navigate to
        path: "", 
        component: ContactComponent,
        title: "Home"
    },
    {
        path: "addContact",
        component: AddContactComponent,
        title: "Add Contact"
    },
    {
        path: "updateContact/:id",
        component: UpdateContactComponent,
        title: "Update Contact"
    },
    
];
