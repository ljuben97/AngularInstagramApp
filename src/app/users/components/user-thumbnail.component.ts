import {Component, Input} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'user-thumbnail',
  templateUrl: '../templates/user-thumbnail.component.html'
})
export class UserThumbnailComponent {
  @Input()
  public user: User;


}
