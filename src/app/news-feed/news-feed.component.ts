import { Component, Input, Output, EventEmitter } from '@angular/core';
import {News} from '../models/news.model';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent  {

  @Input() childNewsList: News[];


}
