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

  getPhotosByAlbumId(albumId: number): Observable<any[]> {
    const url = `${this.albumsUrl}/${albumId}/photos`;
    return this.http.get<any[]>(url);
  }

  createAlbum(album: any): Observable<any[]> {
    return this.http.post<any>(this.albumsUrl, album);
  }

  updateAlbum(album: any, albumId: number): Observable<any[]> {
    const url = `${this.albumsUrl}/${albumId}`;
    return this.http.put<any>(url,album);
  }

  deleteAlbumById(albumId: number): Observable<any[]>{
    const url = `${this.albumsUrl}/${albumId}`;
    return this.http.delete<any>(url);
  }
}