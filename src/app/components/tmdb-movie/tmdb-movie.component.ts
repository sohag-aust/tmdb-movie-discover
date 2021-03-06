import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tmdb-movie',
  templateUrl: './tmdb-movie.component.html',
  styleUrls: ['./tmdb-movie.component.css']
})
export class TmdbMovieComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) {

  }

  genres: [] = [];
  certifications: [] = [];
  certificateKeys = [];
  sortItems = [];

  filteredGenre = {};
  filteredCertificate: string;
  filteredSortBy: string;
  movieList = [];
  baseImageUrl = 'https://image.tmdb.org/t/p/original';
  ngOnInit(): void {

    // dropdown - sortBy
    this.sortItems = ['popularity.desc', 'popularity.asc', 'vote_count.desc', 'vote_count.asc'];

    // dropdown - genre
    this.movieService.getGenres().subscribe((data) => {
      this.genres = data.genres;
    });

    // dropdown - certificate
    this.movieService.getCertification().subscribe((data) => {
      this.certifications = data.certifications;

      for (const certificate in this.certifications) {
        if (this.certifications.hasOwnProperty(certificate)) {
          this.certificateKeys.push(certificate);
        }
      }
    });

    this.makeQueryParam();
  }

  makeQueryParam() {
    let query = '';
    const name = 'name';
    const id = 'id';
    const filteredGenreName = this.filteredGenre[name];
    const filteredGenreId = this.filteredGenre[id];

    if (filteredGenreName) {
      query += `with_genres=${filteredGenreId}`;
    }

    if (this.filteredCertificate) {
      if (query) {
        query += `&certification_country=${this.filteredCertificate}`;
      }else {
        query += `certification_country=${this.filteredCertificate}`;
      }
    }

    if (this.filteredSortBy) {
      if (query) {
        query += `&sort_by=${this.filteredSortBy}`;
      }else {
        query += `sort_by=${this.filteredSortBy}`;
      }
    }

    if (!query) {
      query = 'sort_by=popularity.desc';
    }

    this.movieService.getMovieData(query)
    .pipe(take(1))
    .subscribe(res => {
      this.movieList = res;
    });
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
    this.filteredSortBy = '';
    this.makeQueryParam();
  }

  removeFilteredGenre() {
    this.filteredGenre = {};
    this.makeQueryParam();
  }

  removeCertificate() {
    this.filteredCertificate = '';
    this.makeQueryParam();
  }

  selectMovie(index: any) {
    console.log('== movie id: ', this.movieList[index].id);
    this.router.navigate(['/movie-details', this.movieList[index].id]);
  }
}
