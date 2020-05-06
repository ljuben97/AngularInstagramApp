import {Component, Input} from "@angular/core";
import {Album} from "../../models/album.model";
import {User} from "../../models/user.model";

@Component({
  selector: 'album-thumbnail',
  templateUrl: '../templates/album-thumbnail.component.html'
})
export class AlbumThumbnailComponent {
  @Input()
  public album: Album;

}
