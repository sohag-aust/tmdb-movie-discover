import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersonDetails(personId: any): Observable<any> {

    const API_KEY = 'f7b023c8b7fcf1047125f5f68bf09490';
    const URL = `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}`;
    return this.http.get<any>(URL);
  }
}
