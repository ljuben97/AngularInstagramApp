import {ListUsersComponent} from '../users/components/list-users.component';
import {UserListResolver} from "./resolvers/user-list.resolver";
import {ListAlbumsComponent} from "../albums/components/list-albums.component";
import {AlbumListResolver} from "./resolvers/album-list.resolver";
import {ListPhotosComponent} from "../photos/components/list-photos.component";
import {PhotoListResolver} from "./resolvers/photo-list.resolver";
import {UserDetailsComponent} from "../users/components/user-details.component";
import {UserDetailsResolver} from "./resolvers/user-details.resolver";
import {PhotoDetailsComponent} from "../photos/components/photo-details.component";
import {PhotoDetailsResolver} from "./resolvers/photo-details.resolver";
import {AlbumDetailsComponent} from "../albums/components/album-details.component";
import {AlbumDetailsResolver} from "./resolvers/album-details.resolver";
import {AlbumsByUserResolver} from "./resolvers/albums-by-user.resolver";
import {PhotosByAlbumResolver} from "./resolvers/photos-by-album.resolver";
import {AddUserComponent} from "../users/components/add-user.component";
import {AddAlbumComponent} from "../albums/components/add-album.component";
import {AddPhotoComponent} from "../photos/components/add-photo.component";
import {PhotoIndexComponent} from "../photos/components/photo-index.component";
import {AlbumIndexComponent} from "../albums/components/album-index.component";
import {UserIndexComponent} from "../users/components/user-index.component";

export const routes=[
  {path: '', redirectTo: 'photo', pathMatch: 'full'},
  {path: 'user', component: UserIndexComponent, resolve: {users: UserListResolver}},
  {path: 'album', component: AlbumIndexComponent, resolve: {albums: AlbumListResolver}},
  {path: 'photo', component: PhotoIndexComponent, resolve: {photos: PhotoListResolver}},
  {path: 'user/:id', component: UserDetailsComponent, resolve: {user: UserDetailsResolver, albums: AlbumsByUserResolver}},
  {path: 'album/:id', component: AlbumDetailsComponent, resolve: {album: AlbumDetailsResolver, photos: PhotosByAlbumResolver, users: UserListResolver}},
  {path: 'photo/:id', component: PhotoDetailsComponent, resolve: {photo: PhotoDetailsResolver, albums: AlbumListResolver}},
  {path: 'userAdd', component: AddUserComponent},
  {path: 'albumAdd', component: AddAlbumComponent, resolve: {users: UserListResolver}},
  {path: 'photoAdd', component: AddPhotoComponent, resolve: {albums: AlbumListResolver}}
];
