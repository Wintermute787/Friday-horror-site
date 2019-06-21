import { Component } from '@angular/core';
import { Header} from './models/header.model';
import {Featured} from './models/featured-content.model';
import {News} from './models/news.model';
import {Movies} from './models/movies.model';
import {TV} from './models/TV.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'horror-site';





  // masterTv: TV[] = [
  //
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/gas-mask-man.png?resize=400%2C240&ssl=1', 'TV', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/DarkS02_stills_190411_1.686.2.jpeg?resize=400%2C240&ssl=1', 'Exclusive', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/M66_promo_stills_022519.0015_R.jpg?resize=400%2C240&ssl=1', 'Image', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/under-the-dome.jpg?resize=400%2C240&ssl=1', 'TV', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/lobo-sysy.jpg?resize=400%2C240&ssl=1', 'Review', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  // ]; // masterMovies: Movies[] = [
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/05/rambo.png?resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2017/10/Black-Christmas-2.jpg?resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/DS-11206r-e1560441816998.jpg?zoom=2&resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/doctor-sleep-trailer.png?resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/ghostbusters-stills.png?resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  // ];
  //
  // masterTv: TV[] = [
  //
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/gas-mask-man.png?resize=400%2C240&ssl=1', 'TV', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/DarkS02_stills_190411_1.686.2.jpeg?resize=400%2C240&ssl=1', 'Exclusive', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/M66_promo_stills_022519.0015_R.jpg?resize=400%2C240&ssl=1', 'Image', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/under-the-dome.jpg?resize=400%2C240&ssl=1', 'TV', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  //   // tslint:disable-next-line:max-line-length
  //   new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/lobo-sysy.jpg?resize=400%2C240&ssl=1', 'Review', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  // ];



  home = true;
  movies = false;
  tv = false;
  newMovie = false;
  newTv = false;
  editMovie = false;
  editTv = false;

  open(id) {
    if (id === 1) {
      this.home = true;
      this.movies = false;
      this.tv = false;
      this.newMovie = false;
      this.newTv = false;
      this.editMovie = false;
      this.editTv = false;

    } else if (id === 2) {
      this.home = false;
      this.movies = true;
      this.tv = false;
      this.newMovie = false;
      this.newTv = false;
      this.editMovie = false;
      this.editTv = false;

    } else if (id === 3) {
      this.home = false;
      this.movies = false;
      this.tv = true;
      this.newMovie = false;
      this.newTv = false;
      this.editMovie = false;
      this.editTv = false;
    }
  }



}
