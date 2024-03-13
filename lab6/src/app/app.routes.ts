import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { Observable } from 'rxjs';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'HOME' },
  { path: 'about', component: AboutComponent, title: 'ABOUT' },
  { path: 'albums', component: AlbumsComponent, title: 'ALBUMS' },
  { path: 'albums/:id', component: AlbumsDetailsComponent },
  { path: 'albums/:id/photos', component: AlbumsPhotosComponent },
  {path: '**', component: NotFoundComponent, title: '404 Not Found'}
];

const locations = new Observable((observer) => {

});