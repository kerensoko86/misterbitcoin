import { Component, OnInit, NgModule } from '@angular/core';
import { Contact } from '../../models/contact.model'
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})

export class ContactPageComponent implements OnInit {

  filterBy: any = { term: '' }
  contacts: Contact[] = [];
  currContact: Contact = null;
  subscription: Subscription;
  constructor(private contactService: ContactService) { }


  onFilterHandler(filterBy) {
    this.filterBy = filterBy
    this.contactService.loadContacts(this.filterBy);
  }

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = [...contacts];
    });
    this.onFilterHandler(this.filterBy);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

