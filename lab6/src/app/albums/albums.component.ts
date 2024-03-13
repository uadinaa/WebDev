import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { ServicesComponent } from '../services/services.component'; 

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded: boolean = false;

  constructor(private albumsService: ServicesComponent) {}

  ngOnInit() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((album) => album.id !== id);
    this.albumsService.deleteAlbumById(id).subscribe(() => {
      console.log("deleted ehheeheheh")
    });
  }

  updateAlbum(userId: number, id: number, title: string){
    const album: Album = {
      userId, id, title
    }

    this.albumsService.updateAlbum(album).subscribe(() => {
      console.log("updated, freshhhh now")
    })
  }

  createAlbum(userId: number, id: number, title: string){
    const newAlbum: Album = {
      userId, id, title
    } 

    this.albumsService.createAlbum(newAlbum).subscribe((createdAlbum) => {
      this.albums.push(createdAlbum)
      console.log('created neeew', createdAlbum);
    });
  }
}

