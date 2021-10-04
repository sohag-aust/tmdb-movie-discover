import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ProductData } from '../model/productData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // https://api.themoviedb.org/3/trending/all/day?api_key=f7b023c8b7fcf1047125f5f68bf09490

  // search result with query param ..
  // https://api.themoviedb.org/3/search/company?api_key=f7b023c8b7fcf1047125f5f68bf09490&query=book&page=1

  private products!: ProductData;

  constructor(private http: HttpClient){
  }

  getProductsData(): Observable<any> {
    const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
    const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
    return this.http.get<any>(URL);
  }

  getSearchedProduct(queryParam): Observable<any> {

    console.log('-- getSearchedProduct is called --');

    console.log(queryParam);
    const filterQueryParam = queryParam.split(' ');
    // console.log('filtered .. ', filterQueryParam[0]);

    const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
    const URL = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=${filterQueryParam[0]}&page=1`;
    return this.http.get<any>(URL);
  }

  errorHandler(error: HttpErrorResponse) {
    console.log('Error catched !!');
    return throwError(error.message || 'server error.');
  }
}
