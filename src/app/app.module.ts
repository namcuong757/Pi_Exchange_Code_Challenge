import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyDisplayComponent } from './giphy-display/giphy-display.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header/header.component';
import { SearchGifComponent } from './search/search-gif/search-gif.component';
import { GifDetailComponent } from './gif-detail/gif-detail/gif-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    GiphyDisplayComponent,
    HeaderComponent,
    SearchGifComponent,
    GifDetailComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
