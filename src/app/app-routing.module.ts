import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

import { TmdbMovieComponent } from './components/tmdb-movie/tmdb-movie.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'product', component: ProductComponent},
  {path: 'tmdb-movie', component: TmdbMovieComponent},
  {path: 'movie-details/:movieId', component: MovieDetailsComponent},
  {path: 'person-details/:personId', component: PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SearchComponent, ProductComponent, TmdbMovieComponent, MovieDetailsComponent, PersonDetailsComponent];
