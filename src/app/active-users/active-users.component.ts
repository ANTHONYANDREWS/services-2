import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../inactive-users/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.users = this.userService.activeUsers;
  }
}
