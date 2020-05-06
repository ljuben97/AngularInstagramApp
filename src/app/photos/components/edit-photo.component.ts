import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Photo} from "../../models/photo.model";
import {Album} from "../../models/album.model";
import {FormGroup} from "@angular/forms";
import {PhotoForm} from "../../models/forms/photo-form.model";
import {PhotoService} from "../../services/photo.service";

@Component({
  selector: 'edit-photo',
  templateUrl: '../templates/edit-photo.component.html'
})
export class EditPhotoComponent implements OnInit{
  @Input()
  public photo: Photo;
  @Input()
  public albums: Album[];

  @Output()
  public emitToggle: EventEmitter<boolean>;
  @Output()
  public emitNewPhoto: EventEmitter<Photo>;

  public formGroup: FormGroup;
  public photoForm: PhotoForm;

  constructor(private photoService: PhotoService) {
    this.emitToggle=new EventEmitter<boolean>();
    this.emitNewPhoto=new EventEmitter<Photo>();
  }

  ngOnInit(): void {
    this.photoForm=new PhotoForm(this.photo);
    this.formGroup=this.photoForm.formGroup;
  }

  save(formData): void{
    let id=this.photo.id;
    this.photo=new Photo(formData);
    this.photo.id=id;
    this.photoService.updatePhoto(this.photo);
    this.emitToggle.emit(false);
    this.emitNewPhoto.emit(this.photo);
  }

  cancel(): void{
    this.emitToggle.emit(false);
  }
}
