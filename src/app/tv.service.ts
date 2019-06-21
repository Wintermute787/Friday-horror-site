import { Injectable } from '@angular/core';
import {News} from './models/news.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class TvService {
  tv: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.tv = database.list('tv');
  }
  getTv() {
    return this.tv;
  }

}
