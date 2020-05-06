import {Component, OnInit} from "@angular/core";
import {Photo} from "../../models/photo.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  template: '<list-photos [disableDetails]="false" [photos]="photos" [options]="options"></list-photos>'
})
export class PhotoIndexComponent implements OnInit{
  public photos: Photo[]
  public options: number[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {photos: Photo[]}) => {
      this.photos=data.photos;
    });
    this.options=new Array<number>(4);
    this.options[0]=100;
    this.options[1]=150;
    this.options[2]=200;
    this.options[3]=300;
  }
}
