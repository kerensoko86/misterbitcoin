import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model'
import { UserService } from '../../services/user.service'


@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent implements OnInit {

  @Input() contact: Contact;
  amount: number;

  constructor(private userService: UserService) {
  }

  onTransferCoins() {
    this.userService.addMove(this.amount, this.contact)
    this.amount = null;
  }

  ngOnInit(): void {
  }

}
