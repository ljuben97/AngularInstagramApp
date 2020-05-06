import {Component, OnInit} from "@angular/core";
import {User} from "../../models/user.model";
import {Form, FormControl, FormGroup} from "@angular/forms";
import {UserForm} from "../../models/forms/user-form.model";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: '../templates/add-user.component.html'
})
export class AddUserComponent implements OnInit{

  public userForm: UserForm;
  public formGroup: FormGroup;
  public user: User;

  constructor(private userService: UserService, private router: Router) {
  }


  ngOnInit(): void {
    this.userForm=new UserForm();
    this.formGroup=this.userForm.formGroup;
  }

  cancel(): void{
    this.router.navigate(['user']);
  }

  save(formData): void{
    this.user=new User(formData);
    this.user.id=11;
    this.userService.addUser(this.user);
    this.router.navigate(['user']);
  }
}
