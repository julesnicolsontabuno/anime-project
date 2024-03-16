import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  url = 'https://api.jikan.moe/v4/';

  constructor(private http: HttpClient) {}

  searchAnime(query: string): Observable<any> {
    return this.http.get<any>(`${this.url}anime?q=${query}`);
  }

  getTopAnime(): Observable<any> {
    return this.http.get<any>(`${this.url}top/anime`);
  }

  getTopManga(): Observable<any> {
    return this.http.get<any>(`${this.url}top/manga`);
  }

  getAnimeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}anime/${id}`);
  }

  getMangaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}manga/${id}`);
  }

  getRandomAnime(): Observable<any> {
    return this.http.get<any>(`${this.url}random/anime`);
  }
}
