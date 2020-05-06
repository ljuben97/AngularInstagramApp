import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Album} from "../../models/album.model";

@Component({
  selector: 'photo-form',
  templateUrl: '../templates/photo-form.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}
  `]
})
export class PhotoFormComponent {
  @Input()
  public formGroup: FormGroup;
  @Input()
  public albums: Album[];

}
