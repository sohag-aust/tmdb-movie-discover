import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// httpClientModule
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './services/app-config.service';
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
    ProductService,
    AppConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
