import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = { name: '', coins: 100, moves: null };
  submitted: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log('Submitted: ', this.user);
    this.userService.signup(this.user);
    this.router.navigate(['home']);
  }
}
