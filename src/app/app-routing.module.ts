import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TmdbMovieComponent } from './components/tmdb-movie/tmdb-movie.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tmdb-movie', component: TmdbMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, TmdbMovieComponent];
