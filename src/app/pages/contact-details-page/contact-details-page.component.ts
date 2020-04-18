import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.css'],
})

export class ContactDetailsComponent implements OnInit {

  @Output() onContactSelected = new EventEmitter<Contact>();

  contact: Contact = { name: '', phone: null, email: '' }
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) {
  }

  removeContact(id) {
    this.contactService.deleteContact(id);
    this.router.navigate(['contact']);
  }
  editContact(id) {
    this.router.navigate(['contact/edit/' + id]);
  }
  ngOnInit() {
    this.route.params.subscribe(res => {
      this.contactService.getContactById(res.id).subscribe(res => this.contact = res)
    });
  }

}
