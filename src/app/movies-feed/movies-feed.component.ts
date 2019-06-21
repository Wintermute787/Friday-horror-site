import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies-feed',
  templateUrl: './movies-feed.component.html',
  styleUrls: ['./movies-feed.component.css']
})
export class MoviesFeedComponent implements OnInit {

  constructor(private router: Router, private moviesService: MoviesService) { }
  movies: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

}
