import { Component, OnInit, OnDestroy } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service'
import { UserService } from '../../services/user.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent implements OnInit {

  user: any;
  rate: any;
  subscription: Subscription;

  constructor(private router: Router, private bitcoinService: BitcoinService, private userService: UserService) {
    this.user = this.userService.getUser();
    if (this.user === null) {
      this.router.navigate(['signup'])
    }
  }

  async getRate() {
    this.rate = await this.bitcoinService.getRate();
  }

  ngOnInit() {
    this.getRate();
  }


}
