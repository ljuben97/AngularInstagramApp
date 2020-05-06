import {Component, OnInit} from "@angular/core";
import {Photo} from "../../models/photo.model";
import {Album} from "../../models/album.model";
import {PhotoForm} from "../../models/forms/photo-form.model";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoService} from "../../services/photo.service";

@Component({
  templateUrl: '../templates/add-photo.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}
  `]
})
export class AddPhotoComponent implements OnInit{

  public photo: Photo;
  public albums: Album[];
  public photoForm: PhotoForm;
  public formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService, private router: Router) {
  }

  ngOnInit(): void {
    this.photoForm=new PhotoForm();
    this.formGroup=this.photoForm.formGroup;
    this.activatedRoute.data.subscribe((data: {albums: Album[]}) =>{
      this.albums=data.albums;
    });
  }

  cancel(): void{
    this.router.navigate(['photo']);
  }

  save(formData): void{
    this.photo=new Photo(formData);
    this.photo.id=5001;
    this.photoService.addPhoto(this.photo);
    this.router.navigate(['photo']);
  }
}
