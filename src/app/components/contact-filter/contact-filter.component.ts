import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.css']
})
export class ContactFilterComponent implements OnInit {
  @Input() filterBy: any;

  filterByCopy: any = null;
  @Output() onFilter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.filterByCopy = JSON.parse(JSON.stringify(this.filterBy))
  }

  onInput() {
    this.onFilter.emit(this.filterByCopy);

  }
}
