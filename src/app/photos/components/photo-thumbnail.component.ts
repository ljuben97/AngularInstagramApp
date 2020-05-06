import {Component, Input} from "@angular/core";
import {Photo} from "../../models/photo.model";

@Component({
  templateUrl: '../templates/photo-thumbnail.component.html',
  selector: 'photo-thumbnail'
})
export class PhotoThumbnailComponent {

  @Input()
  public photo: Photo;

}
