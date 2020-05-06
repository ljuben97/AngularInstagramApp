import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../models/photo.model";
import {Album} from "../models/album.model";

@Injectable()
export class PhotoService{

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>('http://jsonplaceholder.typicode.com/photos');
  }

  getPhoto(id: number): Observable<Photo>{
    return this.http.get<Photo>('http://jsonplaceholder.typicode.com/photos/'+id);
  }

  getPhotosByAlbum(albumId: number): Observable<Photo[]>{
    return this.http.get<Photo[]>('http://jsonplaceholder.typicode.com/albums/'+albumId+'/photos');
  }

  addPhoto(photo: Photo): void{
    this.http.put<Photo>('https://jsonplaceholder.typicode.com/photos', photo);
  }

  updatePhoto(photo: Photo): void{
    this.http.put<Photo>('https://jsonplaceholder.typicode.com/photos/'+photo.id, photo);
  }

  deletePhoto(photo: Photo): boolean{
    let conf=confirm('Are you sure you want to delete the photo?');
    if (conf) {
      this.http.delete<Photo>('https://jsonplaceholder.typicode.com/photos/' + photo.id);
      return true;
    }
    return false;
  }
}
