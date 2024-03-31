import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
// import { HomeComponent } from './home/home.component';
import { HomeComponent } from './home/home.component'; 
import { Observable } from 'rxjs';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
//   { path: 'albums/:id', component: SecondComponent },
//   { path: 'albums/:id/photos', component: SecondComponent },
];
const locations = new Observable((observer) => {

});