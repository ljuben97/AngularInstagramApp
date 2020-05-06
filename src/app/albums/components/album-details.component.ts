import {Component, OnInit} from "@angular/core";
import {Album} from "../../models/album.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Photo} from "../../models/photo.model";
import {User} from "../../models/user.model";
import {AlbumService} from "../../services/album.service";

@Component({
  templateUrl: '../templates/album-details.component.html'
})
export class AlbumDetailsComponent implements OnInit{

  public album: Album;
  public users: User[];
  public photos: Photo[];
  public toggleForm: boolean;
  public options: number[];

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService, private router: Router) {
  }

  ngOnInit(): void {
    this.toggleForm=false;
    this.activatedRoute.data.subscribe((data: {album: Album, photos: Photo[], users: User[]}) =>{
      this.album=data.album;
      this.photos=data.photos;
      this.users=data.users;
    });
    this.options=new Array<number>(4);
    this.options[0]=10;
    this.options[1]=20;
    this.options[2]=30;
    this.options[3]=50;
  }

  deleteAlbum(){
    if(this.albumService.deleteAlbum(this.album)){
      this.router.navigate(['album']);
    }
  }

  showForm(): void{
    this.toggleForm=true;
  }

  emitToggle(event): void{
    this.toggleForm=event;
  }

  emitNewAlbum(event): void{
    this.album=event;
  }
}

