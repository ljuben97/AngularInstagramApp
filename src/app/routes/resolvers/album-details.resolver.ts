import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Album} from "../../models/album.model";
import {Observable} from "rxjs";
import {PhotoService} from "../../services/photo.service";
import {AlbumService} from "../../services/album.service";

@Injectable()
export class AlbumDetailsResolver implements Resolve<Album>{

  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> | Promise<Album> | Album {
    return this.albumService.getAlbum(route.params['id']);
  }

}
