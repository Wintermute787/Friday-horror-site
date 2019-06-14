import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderListComponent } from './header-list/header-list.component';
import { NavComponent } from './nav/nav.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { VideoGamesComponent } from './video-games/video-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderListComponent,
    NavComponent,
    FeaturedContentComponent,
    NewsFeedComponent,
    MoviesComponent,
    TVComponent,
    ReviewsComponent,
    VideoGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
