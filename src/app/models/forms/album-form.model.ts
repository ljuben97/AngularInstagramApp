import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Album} from "../album.model";

export class AlbumForm{

  public formGroup: FormGroup;

  public title: FormControl;
  public userId: FormControl;

  constructor(album?: Album) {
    if(!album) {
      this.title = new FormControl('', Validators.required);
      this.userId = new FormControl('', Validators.required);
    }
    else{
      this.title=new FormControl(album.title, Validators.required);
      this.userId=new FormControl(album.userId, Validators.required);
    }
    this.formGroup = new FormGroup({
      title: this.title,
      userId: this.userId
    })
  }

}
