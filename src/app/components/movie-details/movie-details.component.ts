import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from 'src/app/services/movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieDetailsService: MovieDetailsService, private route: ActivatedRoute) { }

  pathVariable: string;
  movieDetail: any;
  baseImageUrl = 'https://image.tmdb.org/t/p/original';

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.pathVariable = paramMap.get('movieId');
    });

    this.movieDetailsService.getMovieDetails(this.pathVariable).subscribe( (data) => {
      this.movieDetail = data;
    });
  }
}
