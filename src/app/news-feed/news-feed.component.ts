import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import {NewsService} from '../news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
  providers: [NewsService]
})
export class NewsFeedComponent implements OnInit {
  constructor(private router: Router, private newsService: NewsService) {}
  news: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.news = this.newsService.getNews();
  }


}
