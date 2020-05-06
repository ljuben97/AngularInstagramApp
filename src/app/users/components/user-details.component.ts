import {Component, OnInit} from "@angular/core";
import {User} from "../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Album} from "../../models/album.model";
import {UserService} from "../../services/user.service";

@Component({
  templateUrl: '../templates/user-details.component.html'
})
export class UserDetailsComponent implements OnInit{
  public user: User;
  public albums: Album[];
  public options: number[];
  public toggleForm: boolean;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: {user: User, albums: Album[]}) => {
      this.user=data.user;
      this.albums=data.albums;
    });
    this.toggleForm=false;
    this.options=new Array<number>(4);
    this.options[0]=2;
    this.options[1]=3;
    this.options[2]=5;
    this.options[3]=10;
  }

  deleteUser(): void{
    if(this.userService.deleteUser(this.user)) {
      this.router.navigate(['user'])
    }
  }

  showForm():void{
    this.toggleForm=true;
  }

  emitToggle(event): void{
    this.toggleForm=event;
  }

  emitNewUser(event): void{
    this.user=event;
  }


}
