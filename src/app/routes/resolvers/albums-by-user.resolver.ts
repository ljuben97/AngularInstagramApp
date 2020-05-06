import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Album} from "../../models/album.model";
import {Observable} from "rxjs";
import {AlbumService} from "../../services/album.service";

@Injectable()
export class AlbumsByUserResolver implements Resolve<Album[]>{

  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album[]> | Promise<Album[]> | Album[] {
    return this.albumService.getAlbumsByUser(route.params['id']);
  }

}
