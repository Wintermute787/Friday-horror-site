import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderListComponent } from './header-list/header-list.component';
import { NavComponent } from './nav/nav.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
