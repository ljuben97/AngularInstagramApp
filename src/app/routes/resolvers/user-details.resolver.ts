import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import {UserService} from "../../services/user.service";
import {AlbumService} from "../../services/album.service";

@Injectable()
export class UserDetailsResolver implements Resolve<User>{

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.getUser(route.params['id']);
  }

}
