import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InstagramAppComponent} from './instagram-app.component';
import {HttpClientModule} from '@angular/common/http';
import {ListUsersComponent} from './users/components/list-users.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes/routes';
import {UserThumbnailComponent} from './users/components/user-thumbnail.component';
import {UserService} from './services/user.service';
import {UserListResolver} from './routes/resolvers/user-list.resolver';
import {AlbumService} from "./services/album.service";
import {AlbumListResolver} from "./routes/resolvers/album-list.resolver";
import {ListAlbumsComponent} from "./albums/components/list-albums.component";
import {AlbumThumbnailComponent} from "./albums/components/album-thumbnail.component";
import {PhotoService} from "./services/photo.service";
import {PhotoListResolver} from "./routes/resolvers/photo-list.resolver";
import {ListPhotosComponent} from "./photos/components/list-photos.component";
import {PhotoThumbnailComponent} from "./photos/components/photo-thumbnail.component";
import {UserDetailsResolver} from "./routes/resolvers/user-details.resolver";
import {UserDetailsComponent} from "./users/components/user-details.component";
import {AlbumDetailsResolver} from "./routes/resolvers/album-details.resolver";
import {PhotoDetailsResolver} from "./routes/resolvers/photo-details.resolver";
import {AlbumDetailsComponent} from "./albums/components/album-details.component";
import {PhotoDetailsComponent} from "./photos/components/photo-details.component";
import {AlbumsByUserResolver} from "./routes/resolvers/albums-by-user.resolver";
import {PhotosByAlbumResolver} from "./routes/resolvers/photos-by-album.resolver";
import {NavbarComponent} from "./navbar/navbar.component";
import {AddUserComponent} from "./users/components/add-user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserFormComponent} from "./users/components/user-form.component";
import {EditUserComponent} from "./users/components/edit-user.component";
import {AddAlbumComponent} from "./albums/components/add-album.component";
import {AlbumFormComponent} from "./albums/components/album-form.component";
import {EditAlbumComponent} from "./albums/components/edit-album.component";
import {AddPhotoComponent} from "./photos/components/add-photo.component";
import {PhotoFormComponent} from "./photos/components/photo-form.component";
import {EditPhotoComponent} from "./photos/components/edit-photo.component";
import {VisiblesPipe} from "./pipes/visibles.pipe";
import {PhotoIndexComponent} from "./photos/components/photo-index.component";
import {AlbumIndexComponent} from "./albums/components/album-index.component";
import {UserIndexComponent} from "./users/components/user-index.component";
import {LoadingScreenComponent} from "./loading/loading-screen.component";


@NgModule({
  declarations: [
    InstagramAppComponent,
    ListUsersComponent,
    UserThumbnailComponent,
    ListAlbumsComponent,
    AlbumThumbnailComponent,
    ListPhotosComponent,
    PhotoThumbnailComponent,
    UserDetailsComponent,
    AlbumDetailsComponent,
    PhotoDetailsComponent,
    NavbarComponent,
    AddUserComponent,
    UserFormComponent,
    EditUserComponent,
    AddAlbumComponent,
    AlbumFormComponent,
    EditAlbumComponent,
    AddPhotoComponent,
    PhotoFormComponent,
    EditPhotoComponent,
    VisiblesPipe,
    PhotoIndexComponent,
    AlbumIndexComponent,
    UserIndexComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    UserListResolver,
    AlbumService,
    AlbumListResolver,
    PhotoService,
    PhotoListResolver,
    UserDetailsResolver,
    AlbumDetailsResolver,
    PhotoDetailsResolver,
    AlbumsByUserResolver,
    PhotosByAlbumResolver
  ],
  bootstrap: [InstagramAppComponent]
})
export class AppModule { }
