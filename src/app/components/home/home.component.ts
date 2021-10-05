import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  movieData: any = [];

  ngOnInit(): void {
    this.movieData = this.getMovieData();
  }

  getMovieData(): any {
    const data = [
      {
        id: 550988,
        name: 'Free Guy'
      },
      {
        id: 568620,
        name: 'Snake Eyes: G.I. Joe Origins'
      },
      {
        id: 703771,
        name: 'Deathstroke: Knights & Dragons'
      },
      {
        id: 681887,
        name: 'Cosmic Sin'
      },
      {
        id: 637534,
        name: 'The Stronghold'
      },
      {
        id: 839436,
        name: 'Dragon Fury'
      },
    ];

    return data;
  }

  selectMovie(index: any) {
    this.router.navigate(['/movie-details', this.movieData[index].id]);
  }
}
