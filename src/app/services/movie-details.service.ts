import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private http: HttpClient) { }

  // https://api.themoviedb.org/3/movie/:movieId?api_key=f7b023c8b7fcf1047125f5f68bf09490

  getMovieDetails(movieId): Observable<any> {
    const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
    console.log('== movieId inside service : ', movieId);
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    return this.http.get<any>(URL);
  }

}
