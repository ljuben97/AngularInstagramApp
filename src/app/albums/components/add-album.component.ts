import {Component, OnInit} from "@angular/core";
import {Album} from "../../models/album.model";
import {AlbumForm} from "../../models/forms/album-form.model";
import {FormGroup} from "@angular/forms";
import {User} from "../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumService} from "../../services/album.service";

@Component({
  templateUrl: '../templates/add-album.component.html'
})
export class AddAlbumComponent implements OnInit{

  public album: Album;
  public users: User[];
  public albumForm: AlbumForm;
  public formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService, private router: Router) {
  }

  ngOnInit(): void {
    this.albumForm=new AlbumForm();
    this.formGroup=this.albumForm.formGroup;
    this.activatedRoute.data.subscribe((data:{users: User[]}) =>{
      this.users=data.users;
    });
  }

  cancel(): void{
    this.router.navigate(['album']);
  }

  save(formData): void {
    this.album=new Album(formData);
    this.album.id=101;
    this.albumService.addAlbum(this.album);
    this.router.navigate(['album']);
  }


}
