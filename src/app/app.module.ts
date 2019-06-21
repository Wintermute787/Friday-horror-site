import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FormsModule} from '@angular/forms';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderListComponent } from './header-list/header-list.component';
import { NavComponent } from './nav/nav.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { HomeComponent } from './home/home.component';
import { MoviesFeedComponent } from './movies-feed/movies-feed.component';
import { TvFeedComponent } from './tv-feed/tv-feed.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeaturedContentComponent,
    NewsFeedComponent,
    MoviesComponent,
    TVComponent,
    ReviewsComponent,
    VideoGamesComponent,
    HomeComponent,
    MoviesFeedComponent,
    TvFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
