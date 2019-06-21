import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';


@Injectable()
export class FeaturedService {
  featured: FirebaseObjectObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.featured = database.object('featured');
  }
  getFeatured() {
    return this.featured;
  }

}
