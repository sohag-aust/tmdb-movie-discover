import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieConfig } from '../model/AppConfigData';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieConfig: MovieConfig;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.movieConfig = appConfigService.config.movie_api;
  }

  getGenres(): Observable<any> {
    const URL = `${this.movieConfig.url}/genre/movie/list?api_key=${this.movieConfig.api_key}&language=en-US`;
    return this.http.get<any>(URL);
  }

  getCertification(): Observable<any> {
    const URL = `${this.movieConfig.url}/certification/movie/list?api_key=${this.movieConfig.api_key}`;
    return this.http.get<any>(URL);
  }

  getMovieData(query): Observable<any> {
    const URL = `${this.movieConfig.url}/discover/movie?${query}&api_key=${this.movieConfig.api_key}`;
    return this.http.get<any>(URL).pipe(map(res => res.results));
  }
}
