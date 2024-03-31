import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'https://your-api-url/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.albumsUrl);
  }

  getAlbumById(albumId: number): Observable<any> {
    const url = `${this.albumsUrl}/${albumId}`;
    return this.http.get<any>(url);
  }

  // Add methods for CRUD operations as needed
}