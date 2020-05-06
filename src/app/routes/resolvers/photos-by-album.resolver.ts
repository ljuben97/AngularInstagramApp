import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Photo} from "../../models/photo.model";
import {Observable} from "rxjs";
import {PhotoService} from "../../services/photo.service";

@Injectable()
export class PhotosByAlbumResolver implements Resolve<Photo[]>{

  constructor(private photoService: PhotoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Promise<Photo[]> | Photo[] {
    return this.photoService.getPhotosByAlbum(route.params['id']);
  }

}
