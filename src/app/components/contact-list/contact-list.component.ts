import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() onContactSelected = new EventEmitter<Contact>();

  // @Input() contacts: Array<any>;
  @Input() contacts: Contact[];
  constructor() { }

  ngOnInit() {
  }

}
