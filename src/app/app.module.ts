import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './shared/components/post/post.component';
import { MobilePComponent } from './shared/components/mobile-p/mobile-p.component';
import { MoviesComponent } from './shared/components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MobilePComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
