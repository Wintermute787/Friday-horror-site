import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import { Router } from '@angular/router';
import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
  constructor(private router: Router, private moviesService: MoviesService) {}
  movies: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }
}
