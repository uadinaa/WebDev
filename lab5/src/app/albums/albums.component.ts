import { Component,OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second', //app-albums
  standalone: true,
  imports: [],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent implements OnInit {
  // albums$!: Observable<any[]>; // тут леп белгиси болмаган, куик фикспен косты

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    // this.albums$ = this.albumsService.getAlbums();
  }
}


// export class AlbumsComponent {
// }
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-albums',
//   templateUrl: './second.component.html',
//   styleUrls: ['./second.component.css']
// })