import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
    const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

    return this.http.get<any>(URL);
  }

  getCertification(): Observable<any> {
    const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
    const URL = `https://api.themoviedb.org/3/certification/movie/list?api_key=${API_KEY}`;
    return this.http.get<any>(URL);
  }

  // getSortedData(queryValue: string) {
  //   const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
  //  // const queryValue = 'popularity.desc';
  //   const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=${queryValue}&api_key=${API_KEY}&language=en-US`;
  //   return this.http.get<any>(URL).pipe(map(res => res.results));
  // }

  // getDataGenresId(genreId: number) {
  //   const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
  //   const URL = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=${API_KEY}&language=en-US`;
  //   return this.http.get<any>(URL).pipe(map(res => res.results));
  // }

  // getDataByCertificationCountry(countryCode: string) {
  //   console.log('==== country code inside service ....', countryCode);
  //   const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
  //   const URL = `https://api.themoviedb.org/3/discover/movie?certification_country=${countryCode}&api_key=${API_KEY}`;
  //   return this.http.get<any>(URL).pipe(map(res => res.results));
  // }

  getMovieData(query): Observable<any> {
    const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
    const URL = `https://api.themoviedb.org/3/discover/movie?${query}&api_key=${API_KEY}`;
    return this.http.get<any>(URL).pipe(map(res => res.results));
  }
}
