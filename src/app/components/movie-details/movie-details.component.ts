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

  ngOnInit(): void {
    // console.log('hello i am initialized ..');

    this.route.paramMap.subscribe( paramMap => {
      this.pathVariable = paramMap.get('movieId');
      console.log(this.pathVariable);
    });


    this.movieDetailsService.getMovieDetails(this.pathVariable).subscribe( (data) => {
      console.log('== data : ', data);
      this.movieDetail = data;
    });
  }


}
