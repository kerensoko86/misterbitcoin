import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {

  moves: any[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.onMoveAdded$.subscribe(() => {
      this.moves = this.userService.getMoves()
    })
  }

}
