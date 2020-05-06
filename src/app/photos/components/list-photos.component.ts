import {Component, Input, OnInit} from "@angular/core";
import {Photo} from "../../models/photo.model";
import {ActivatedRoute} from "@angular/router";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'list-photos',
  templateUrl: '../templates/list-photos.component.html'
})
export class ListPhotosComponent implements OnInit{
  @Input()
  public photos: Photo[];
  @Input()
  public options: number[];
  @Input()
  public disableDetails: boolean;
  public slicer: number;
  public elements: number;

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
    let size=this.photos.length/this.elements;
    let buttonArray=newArray<number>(size);
    for(let i=0; i<size; i++)
      buttonArray[i]=i+1;
    return buttonArray;
  }

}
