import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ProductData } from '../model/productData';
import { MovieConfig } from '../model/AppConfigData';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products!: ProductData;

  private movieConfig: MovieConfig;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.movieConfig = appConfigService.config.movie_api;
  }

  getProductsData(): Observable<any> {
    const URL = `${this.movieConfig.url}/trending/all/day?api_key=${this.movieConfig.api_key}`;
    return this.http.get<any>(URL);
  }

  getSearchedProduct(queryParam): Observable<any> {
    const filterQueryParam = queryParam.split(' ');
    const URL = `${this.movieConfig.url}/search/company?api_key=${this.movieConfig.api_key}&query=${filterQueryParam[0]}&page=1`;
    return this.http.get<any>(URL);
  }

  errorHandler(error: HttpErrorResponse) {
    console.log('Error catched !!');
    return throwError(error.message || 'server error.');
  }
}
