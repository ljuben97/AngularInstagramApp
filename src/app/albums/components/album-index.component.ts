import {Component, OnInit} from "@angular/core";
import {Album} from "../../models/album.model";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  template: '<list-albums [albums]="albums" [options]="options"></list-albums>'
})
export class AlbumIndexComponent implements OnInit{
  public albums: Album[];
  public options: number[];
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.activatedRoute.data.subscribe((data: {albums: Album[]}) =>{
      this.albums=data.albums
    });
    this.options=new Array<number>(4);
    this.options[0]=10;
    this.options[1]=15;
    this.options[2]=20;
    this.options[3]=30;
  }
}
