import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {User} from "../../models/user.model";
import {FormGroup} from "@angular/forms";
import {UserForm} from "../../models/forms/user-form.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'edit-user',
  templateUrl: '../templates/edit-user.component.html'
})
export class EditUserComponent implements OnInit{
  @Input()
  public user: User;

  @Output()
  public emitToggle: EventEmitter<boolean>;

  @Output()
  public emitNewUser: EventEmitter<User>

  public formGroup: FormGroup;
  public userForm: UserForm;

  constructor(private userService: UserService) {
    this.emitToggle=new EventEmitter<boolean>();
    this.emitNewUser=new EventEmitter<User>();
  }

  ngOnInit(): void {
    this.userForm=new UserForm(this.user);
    this.formGroup=this.userForm.formGroup;
  }

  save(formData): void{
    let id=this.user.id;
    this.user=new User(formData);
    this.user.id=id;
    this.userService.updateUser(this.user);
    this.emitToggle.emit(false);
    this.emitNewUser.emit(this.user);
  }

  cancel(): void{
    this.emitToggle.emit(false);
  }


}
