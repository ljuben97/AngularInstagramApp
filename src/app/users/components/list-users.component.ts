import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'list-users',
  templateUrl: '../templates/list-users.component.html'
})
export class ListUsersComponent{

  @Input()
  public users: User[];

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

}
