import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Photos } from '../models';
import { ServicesComponent } from '../services/services.component'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums-photos.component.html',
  styleUrl: './albums-photos.component.css'
})
export class AlbumsPhotosComponent implements OnInit {
  albumId: number | undefined;
  photos!: Photos[];
  loaded: boolean = false;

  constructor(private albumServise: ServicesComponent, 
              private route: ActivatedRoute,
              private router: Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')){
        this.albumId = Number(params.get('id'));
        this.loaded = false;
        this.albumServise.getPhotosByAlbumId(this.albumId).subscribe((album) => {
          this.photos = album;
          this.loaded = true;
        });
      }
    });
  }

  goToHome() {
    this.router.navigate(['/home']); // navigate to the home page
  }
}
