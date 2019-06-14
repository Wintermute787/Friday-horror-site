import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderListComponent } from './header-list/header-list.component';
import { NavComponent } from './nav/nav.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderListComponent,
    NavComponent,
    FeaturedContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
