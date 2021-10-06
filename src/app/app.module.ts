import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppConfigService } from './services/app-config.service';
import { PersonService } from './services/person.service';
import { MovieDetailsService } from './services/movie-details.service';

import { MovieService } from './services/movie.service';

// httpClientModule
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistsComponent } from './components/artists/artists.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const appConfigFactory = (appConfigService: AppConfigService) => {
  return () => appConfigService.Init();
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ArtistsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [AppConfigService],
      multi: true
    },

    PersonService,
    MovieDetailsService,
    MovieService,
    ProductService,
    AppConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
