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
  images: any = ['1542204165-65bf26472b9b', '1535016120720-40c646be5580', '1485846234645-a62644f84728'].map((n) => `https://images.unsplash.com/photo-${n}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`);
  imgURL: any = 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80';

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
