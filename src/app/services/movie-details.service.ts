import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieConfig } from '../model/AppConfigData';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  private movieConfig: MovieConfig;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.movieConfig = appConfigService.config.movie_api;
  }

  getMovieDetails(movieId): Observable<any> {
    const URL = `${this.movieConfig.url}/movie/${movieId}?api_key=${this.movieConfig.api_key}`;
    return this.http.get<any>(URL);
  }
}
