import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {User} from "../../models/user.model";

@Component({
  selector: 'album-form',
  templateUrl: '../templates/album-form.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}
  `]
})
export class AlbumFormComponent {
  @Input()
  public formGroup: FormGroup;
  @Input()
  public users: User[];
}
