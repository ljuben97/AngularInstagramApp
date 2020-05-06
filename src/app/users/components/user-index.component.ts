import {Component, OnInit} from "@angular/core";
import {User} from "../../models/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  template: '<list-users [users]="users"></list-users>'
})
export class UserIndexComponent implements OnInit{
  public users: User[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.activatedRoute.data.subscribe((data: {users: User[]}) => {
      this.users=data.users;
    });
  }
}
