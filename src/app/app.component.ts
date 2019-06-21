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



  masterHeader: Header[] = [
    // tslint:disable-next-line:max-line-length
    new Header('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2018/03/Alone-in-the-Dark-e1559593753536.jpg?zoom=2&resize=590%2C354&ssl=1', '10 Great Slasher Films that you maybe haven\'t seen yet', 'Of all the many sub generes of Horror, one of the most popular and well-loved is the slasher...')
  ];

  masterFeatured: Featured[] = [
    // tslint:disable-next-line:max-line-length
    new Featured('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/banana-splits-movie-trailer.png?resize=590%2C354&ssl=1', 'Movies', 'The Rated R Banana Splits Movie puts a violent, gory spin on the classic children\'s show'),
    // tslint:disable-next-line:max-line-length
    new Featured( 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/Bloody-Disgusting-The-Shining-Doctor-Sleep-Oculus-Mirror-Lasser-Glass.jpg?resize=590%2C354&ssl=1', 'Interviews', 'The Oculus Mirror is Hidden in the overlook Hotel in Doctor Sleep'),
    // tslint:disable-next-line:max-line-length
    new Featured('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/DS-TRLR-0001-e1560441809129.jpg?zoom=2&resize=400%2C240&ssl=1', 'Movies', 'Mike Flanagans Doctor Sleep takes us back to the overlook hotel for a true sequel to \'The Shining\''),
    // tslint:disable-next-line:max-line-length
    new Featured('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/horror-bugs.png?resize=400%2C240&ssl=1', 'Images', 'This artist turned horror villians into insects and It\'s much, much cooler than it probably sounds'),
    // tslint:disable-next-line:max-line-length
    new Featured('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/05/Last-House-on-the-Left-e1559593527219.jpg?zoom=2&resize=400%2C240&ssl=1', 'Editorials', 'The Nihilistic savagery of Wes Craven\'s \'The Last House on the left\''),

  ];

/*  masterNews: News[] = [
    // tslint:disable-next-line:max-line-length
    new News('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-29-at-2.09.02-PM.png?resize=400%2C240&ssl=1', 'Images', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula turpis non nulla ullamcorper, vitae congue risus dictum. Aenean accumsan lorem et lorem condimentum.'),
    // tslint:disable-next-line:max-line-length
    new News('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/photo.jpg?resize=400%2C240&ssl=1', 'Images', 'Aliquam ut commodo sem. Nam commodo molestie ornare. Vestibulum ligula lorem, aliquam blandit eros at, vehicula finibus mi.'),
    // tslint:disable-next-line:max-line-length
    new News('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/plaguetale.jpg?resize=400%2C240&ssl=1', 'Movies', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa. '),
    // tslint:disable-next-line:max-line-length
    new News('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/mk11shang.jpg?resize=400%2C240&ssl=1', 'Video games', 'Maecenas felis lectus, commodo quis viverra at, facilisis at elit. Morbi rhoncus facilisis elit, rhoncus porta lorem interdum nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    // tslint:disable-next-line:max-line-length
    new News('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/hot-topic-freddy-krueger.png?resize=400%2C240&ssl=1', 'TV', 'Quisque id mi vel enim convallis tempus et nec erat. Etiam et tincidunt quam, et consequat est.'),
    // tslint:disable-next-line:max-line-length
    new News('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/A23_promo_stills_022519.0037_R.jpg?resize=400%2C240&ssl=1', 'Movies', 'Suspendisse fermentum sapien in tortor facilisis, id convallis tortor viverra. Nulla facilisi.'),

  ];*/

  masterMovies: Movies[] = [
    // tslint:disable-next-line:max-line-length
    new Movies('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/05/rambo.png?resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
    // tslint:disable-next-line:max-line-length
    new Movies('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2017/10/Black-Christmas-2.jpg?resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
    // tslint:disable-next-line:max-line-length
    new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/DS-11206r-e1560441816998.jpg?zoom=2&resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
    // tslint:disable-next-line:max-line-length
    new Movies('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/doctor-sleep-trailer.png?resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
    // tslint:disable-next-line:max-line-length
    new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/ghostbusters-stills.png?resize=400%2C240&ssl=1', 'movie', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  ];

  masterTv: TV[] = [

    // tslint:disable-next-line:max-line-length
    new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/gas-mask-man.png?resize=400%2C240&ssl=1', 'TV', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
    // tslint:disable-next-line:max-line-length
    new Movies('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/DarkS02_stills_190411_1.686.2.jpeg?resize=400%2C240&ssl=1', 'Exclusive', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
    // tslint:disable-next-line:max-line-length
    new Movies('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/M66_promo_stills_022519.0015_R.jpg?resize=400%2C240&ssl=1', 'Image', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
    // tslint:disable-next-line:max-line-length
    new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/under-the-dome.jpg?resize=400%2C240&ssl=1', 'TV', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
    // tslint:disable-next-line:max-line-length
    new Movies('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/lobo-sysy.jpg?resize=400%2C240&ssl=1', 'Review', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa.'),
  ];

  selectedMovie: Movies;
  selectedTv: TV;

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
