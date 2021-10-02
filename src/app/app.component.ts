import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import {take } from 'rxjs/operators';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private movieService: MovieService) {

  }

  genres:[] = [];
  certifications:[] = [];
  certificateKeys = [];
  sortItems = [];

  filteredGenre = {};
  filteredCertificate: string;
  filteredSortBy: string;
  
  movieList = [];
  
  baseImageUrl = "https://image.tmdb.org/t/p/original";

  ngOnInit(): void {

    // dropdown - sortBy
    this.sortItems = ['popularity.desc', 'popularity.asc', 'vote_count.desc', 'vote_count.asc'];

    // dropdown - genre
    this.movieService.getGenres().subscribe((data) => {
      console.log(data.genres);
      this.genres = data.genres;
    });

    // dropdown - certificate
    this.movieService.getCertification().subscribe((data) => {
      console.log('certification: ', data.certifications);
      this.certifications = data.certifications;
      console.log(typeof this.certifications);

      for(let certificate in this.certifications) {
        console.log(certificate);
        this.certificateKeys.push(certificate);
      }
    })

    this.makeQueryParam();
  }


  makeQueryParam() {
    let query = '';

    if(this.filteredGenre['name']) {
      query+=`with_genres=${this.filteredGenre['id']}`;
    }

    if(this.filteredCertificate) {
      if(query) {
        query+=`&certification_country=${this.filteredCertificate}`;
      }else {
        query+=`certification_country=${this.filteredCertificate}`;
      }
    }

    if(this.filteredSortBy) {
      if(query) {
        query+=`&sort_by=${this.filteredSortBy}`;
      }else {
        query+=`sort_by=${this.filteredSortBy}`;
      }
    }

    if(!query) {
      query = "sort_by=popularity.desc";
    }

    console.log(`----->>>> my ultimate query : ${query}`);

    this.movieService.getMovieData(query)
    .pipe(take(1))
    .subscribe(res => {
      console.log("----------> query passed ----",res);
      this.movieList = res;
    })
  }

  getFilteredGenre(index): void {
    this.filteredGenre = this.genres[index];
    this.makeQueryParam();
  }

  getFilteredCertificate(index): void {
    this.filteredCertificate = this.certificateKeys[index];
    this.makeQueryParam();
  }

  getFilteredSortBy(index): void{
    this.filteredSortBy = this.sortItems[index];
    this.makeQueryParam();
  }

  removeFilteredSortBy() {
    this.filteredSortBy='';
    this.makeQueryParam();
  }

  removeFilteredGenre() {
    this.filteredGenre={};
    this.makeQueryParam();
  }

  removeCertificate() {
    this.filteredCertificate='';
    this.makeQueryParam();
  }
}
