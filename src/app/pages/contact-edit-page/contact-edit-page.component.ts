import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.css']
})
export class ContactEditPageComponent {

  contact: Contact = { name: '', phone: null, email: '' };
  submitted: boolean = false;
  Params: any;
  id: string;

  constructor(private location: Location, private route: ActivatedRoute, private contactService: ContactService, private router: Router) {
    this.route.params.subscribe(res => {
      if (res.id === 'add') return;
      else this.contactService.getContactById(res.id).subscribe(res => this.contact = res)
    });
  }

  onGoBackClick() {
    this.location.back;
  }

  onSubmit() {
    this.submitted = true;
    console.log('Submitted: ', this.contact);
    this.contactService.saveContact(this.contact);
    this.router.navigate(['contact']);
  }
}
