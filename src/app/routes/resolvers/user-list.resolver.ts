import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {Injectable} from '@angular/core';

@Injectable()
export class UserListResolver implements Resolve<User[]>{

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUsers();
  }



}
