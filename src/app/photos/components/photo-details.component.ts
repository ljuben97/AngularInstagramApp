import {Component, OnInit} from "@angular/core";
import {Photo} from "../../models/photo.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Album} from "../../models/album.model";
import {PhotoService} from "../../services/photo.service";

@Component({
  templateUrl: '../templates/photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{

  public photo: Photo;
  public albums: Album[];
  public toggleForm: boolean;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: {photo: Photo, albums: Album[]}) =>{
      this.photo=data.photo;
      this.albums=data.albums;
    });
    this.toggleForm=false;
  }

  deletePhoto(): void{
    if(this.photoService.deletePhoto(this.photo)){
      this.router.navigate(['photo']);
    }
  }

  showForm(): void{
    this.toggleForm=true;
  }

  emitToggle(event): void{
    this.toggleForm=event;
  }

  emitNewPhoto(event): void{
    this.photo=event;
  }
}
