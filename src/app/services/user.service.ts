import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>('http://jsonplaceholder.typicode.com/users/'+id);
  }

  addUser(user: User): void{
    this.http.post<User>('http://jsonplaceholder.typicode.com/users', user);
  }

  updateUser(user: User): void{
    this.http.put<User>('https://jsonplaceholder.typicode.com/users/'+user.id, user);
  }

  deleteUser(user: User): boolean{
    let conf=confirm('Are you sure you want to delete the user?');
    if(conf){
      this.http.delete<User>('https://jsonplaceholder.typicode.com/users/'+user.id);
      return true;
    }
    return false;
  }
}
