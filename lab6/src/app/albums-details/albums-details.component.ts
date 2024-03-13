import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Album } from '../models';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-albums-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './albums-details.component.html',
  styleUrl: './albums-details.component.css'
})
export class AlbumsDetailsComponent implements OnInit{
  album!: Album;
  loaded: boolean = false;
  newTitle = '';

  constructor(private route: ActivatedRoute,
              private albumService: ServicesComponent) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params) =>{
      if(params.get('id')){
        const albumId = Number(params.get('id'));
        this.loaded = false;
        this.albumService.getAlbumById(albumId).subscribe((album)=>{
          this.album = album;
          this.loaded = true;
        });
      }
    });
  }

  editTitleAlbum(title: string){
    const userId = this.album.userId;
    const id = this.album.id;
    const album: Album = {
      userId, id, title
    }

    this.albumService.updateAlbum(album).subscribe(()=>{
      console.log("updated");
      this.album.title = album.title;
    })
  }
}