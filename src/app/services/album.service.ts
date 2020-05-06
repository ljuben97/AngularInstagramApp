import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../models/album.model';

@Injectable()
export class AlbumService{

  constructor(private http: HttpClient){

  }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('http://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>('http://jsonplaceholder.typicode.com/albums/'+id);
  }

  getAlbumsByUser(userId: number): Observable<Album[]>{
    return this.http.get<Album[]>('http://jsonplaceholder.typicode.com/users/'+userId+'/albums');
  }

  addAlbum(album: Album): void {
    this.http.post<Album>('https://jsonplaceholder.typicode.com/albums', album);
  }

  updateAlbum(album: Album): void{
    this.http.put<Album>('https://jsonplaceholder.typicode.com/albums/'+album.id, album);
  }

  deleteAlbum(album: Album): boolean{
    let conf= confirm('Are you sure you want to delete the album?');
    if(conf) {
      this.http.delete<Album>('https://jsonplaceholder.typicode.com/albums/' + album.id);
      return true;
    }
    return false;
  }

}
