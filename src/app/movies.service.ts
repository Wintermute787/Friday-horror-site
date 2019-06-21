import { Injectable } from '@angular/core';
import {News} from './models/news.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class MoviesService {
  movies: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.movies = database.list('movies');
  }

  getMovies() {
    return this.movies;
  }
}
