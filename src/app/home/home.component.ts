import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewsService} from '../news.service';

import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FeaturedService} from '../featured.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NewsService, FeaturedService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private newsService: NewsService, private featuredService: FeaturedService) { }

  news: FirebaseListObservable<any[]>;
  featured: FirebaseObjectObservable<any[]>;
  currentRoute: string = this.router.url;

  ngOnInit() {
    this.news = this.newsService.getNews();
    this.featured = this.featuredService.getFeatured();
  }



}
