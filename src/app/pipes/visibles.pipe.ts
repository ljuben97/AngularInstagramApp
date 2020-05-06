import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'visibles'
})
export class VisiblesPipe implements PipeTransform{

  transform(array: any[], slicer: number, elements: number): any[] {
    return array.slice((slicer-1)*elements, slicer*elements);
  }

}
