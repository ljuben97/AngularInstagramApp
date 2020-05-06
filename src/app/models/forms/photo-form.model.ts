import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Photo} from "../photo.model";

export class PhotoForm {

  public formGroup: FormGroup;

  public title: FormControl;
  public url: FormControl;
  public thumbnailUrl: FormControl;
  public albumId: FormControl;

  constructor(photo?: Photo) {
    if(!photo){
      this.title=new FormControl('', Validators.required);
      this.url=new FormControl('', Validators.required);
      this.thumbnailUrl=new FormControl('', Validators.required);
      this.albumId=new FormControl('', Validators.required);
    }
    else {
      this.title=new FormControl(photo.title, Validators.required);
      this.url=new FormControl(photo.url, Validators.required);
      this.thumbnailUrl=new FormControl(photo.thumbnailUrl, Validators.required);
      this.albumId=new FormControl(photo.albumId, Validators.required);
    }

    this.formGroup=new FormGroup({
      title: this.title,
      url: this.url,
      thumbnailUrl: this.thumbnailUrl,
      albumId: this.albumId
    });
  }
}
