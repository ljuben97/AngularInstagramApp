import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Album} from "../../models/album.model";
import {User} from "../../models/user.model";
import {FormGroup} from "@angular/forms";
import {AlbumForm} from "../../models/forms/album-form.model";
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'edit-album',
  templateUrl: '../templates/edit-album.component.html'
})
export class EditAlbumComponent implements OnInit{
  @Input()
  public album: Album;
  @Input()
  public users: User[];

  @Output()
  public emitToggle: EventEmitter<boolean>
  @Output()
  public emitNewAlbum: EventEmitter<Album>

  public formGroup: FormGroup;
  public albumForm: AlbumForm;

  constructor(private albumService: AlbumService) {
    this.emitNewAlbum=new EventEmitter<Album>();
    this.emitToggle=new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    this.albumForm=new AlbumForm(this.album);
    this.formGroup=this.albumForm.formGroup;
  }

  save(formData){
    let id=this.album.id
    this.album=new Album(formData);
    this.album.id=id;
    this.albumService.updateAlbum(this.album);
    this.emitToggle.emit(false);
    this.emitNewAlbum.emit(this.album);
  }

  cancel(){
    this.emitToggle.emit(false);
  }


}
