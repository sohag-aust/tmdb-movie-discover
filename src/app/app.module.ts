import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieService } from './services/movie.service';
import { AppConfigService } from './services/app-config.service';

// httpClientModule
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

const appConfigFactory = (appConfigService: AppConfigService) => {
  return () => appConfigService.Init();
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [AppConfigService],
      multi: true
    },

    MovieService,
    ProductService,
    AppConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
