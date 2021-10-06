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
  personData: any = [];

  ngOnInit(): void {
    this.movieData = this.getMovieData();
    this.personData = this.getPersonData();
  }

  getPersonData(): any {
    const data = [
      {
        id: 1,
        name: 'George Walton'
      },
      {
        id: 2,
        name: 'Mark Hamil'
      },
      {
        id: 7,
        name: 'Andrew'
      },
      {
        id: 4,
        name: 'Carrie Frances'
      },
      {
        id: 11,
        name: 'Dave Reynolds'
      },
      {
        id: 6,
        name: 'Anthony Kingsley'
      }
    ];

    return data;
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

  selectPerson(index: any) {
    this.router.navigate(['/person-details', this.personData[index].id]);
  }

  selectMovie(index: any) {
    this.router.navigate(['/movie-details', this.movieData[index].id]);
  }
}
