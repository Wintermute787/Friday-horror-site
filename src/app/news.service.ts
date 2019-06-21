import { Injectable } from '@angular/core';
import {News} from './models/news.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
}
