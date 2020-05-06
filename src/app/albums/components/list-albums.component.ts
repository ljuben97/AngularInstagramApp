import {Component, Input, OnInit} from "@angular/core";
import {Album} from "../../models/album.model";
import {ActivatedRoute} from "@angular/router";
import {newArray} from "@angular/compiler/src/util";
import {User} from "../../models/user.model";

@Component({
  selector: 'list-albums',
  templateUrl: '../templates/list-albums.component.html'
})
export class ListAlbumsComponent implements OnInit{
  @Input()
  public albums: Album[];
  @Input()
  public options: number[];

  public slicer: number;
  public elements: number;

  constructor() {
  }

  ngOnInit(): void {
    this.slicer=1;
    this.elements=this.options[0];
  }

  setSlicer(slicer: number): void{
    this.slicer=slicer;
  }

  setElements(elements: number): void{
    this.elements=elements;
    this.slicer=1;
  }

  getButtonArray(): number[]{
    let size=this.albums.length/this.elements;
    let buttonArray=newArray<number>(size);
    for(let i=0; i<size; i++)
      buttonArray[i]=i+1;
    return buttonArray;
  }
}
