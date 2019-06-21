import { Injectable } from '@angular/core';
import {News} from './models/news.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class NewsService {
  news: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.news = database.list('news');
  }
  getNews() {
    return this.news;
  }
  getNewsById(newsId: string) {
    return this.database.object('news/' + newsId);
  }
}
