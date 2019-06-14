import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Movies} from '../models/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  {
  @Input() childMovieList: Movies[];
  @Output() clickSender = new EventEmitter();

}
