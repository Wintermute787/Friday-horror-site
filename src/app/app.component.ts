import { Component } from '@angular/core';
import { Header} from './models/header.model';
import {Featured} from './models/featured-content.model';
import {News} from "./models/news.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'horror-site';

  masterHeader: Header[] = [
    // tslint:disable-next-line:max-line-length
    new Header('10 Great Slasher Films that you maybe haven\'t seen yet', 'Of all the many sub generes of Horror, one of the most popular and well-loved is the slasher...')
  ];

  masterFeatured: Featured[] = [
    new Featured('Movies', 'The Rated R Banana Splits Movie puts a violent, gory spin on the classic childrens show'),
    new Featured('Interviews', 'The Oculus Mirror is Hidden in the overlook Hotel in Doctor Sleep'),
    new Featured('Movies', 'Mike Flanagans Doctor Sleep takes us back to the overlook hotel for a true sequel to \'The Shining\''),
    new Featured('Images', 'This artist turned horror villians into insects and It\'s much, much cooler than it probably sounds'),
    new Featured('Editorials', 'The Nihilistic savagery of Wes Craven\'s \'The Last House on the left\''),
    new Featured('Editorials', 'John Carpenter\'s overlooked cosmic apocalypse picture \'In the moutn of madness\' turns 25')
  ];

  masterNews: News[] = [
    // tslint:disable-next-line:max-line-length
    new News('Images', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula turpis non nulla ullamcorper, vitae congue risus dictum. Aenean accumsan lorem et lorem condimentum.'),
    // tslint:disable-next-line:max-line-length
    new News('Images', 'Aliquam ut commodo sem. Nam commodo molestie ornare. Vestibulum ligula lorem, aliquam blandit eros at, vehicula finibus mi.'),
    new News('Movies', 'Nam varius ipsum eget nulla facilisis porttitor. Vestibulum vitae iaculis massa. '),
    // tslint:disable-next-line:max-line-length
    new News('Video games', 'Maecenas felis lectus, commodo quis viverra at, facilisis at elit. Morbi rhoncus facilisis elit, rhoncus porta lorem interdum nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new News('TV', 'Quisque id mi vel enim convallis tempus et nec erat. Etiam et tincidunt quam, et consequat est.'),
    new News('Movies', 'Suspendisse fermentum sapien in tortor facilisis, id convallis tortor viverra. Nulla facilisi.'),

  ];
}
