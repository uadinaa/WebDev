import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models'; 
import { Photos } from '../models'; 

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class ServicesComponent {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  // client = http

  constructor(private http: HttpClient) {}

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumsUrl, album);
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbumById(albumId: number): Observable<Album> {
    const url = `${this.albumsUrl}/${albumId}`;
    return this.http.get<Album>(url);
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.albumsUrl}/${album.id}`;
    return this.http.put<Album>(url,album);
  }

  getPhotosByAlbumId(albumId: number) { 
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    return this.http.get<Photos[]>(url);
  }

  deleteAlbumById(albumId: number){ 
    const url = `${this.albumsUrl}/${albumId}`;
    return this.http.delete<Album>(url);
  }
}

