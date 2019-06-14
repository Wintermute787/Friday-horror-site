import { Component } from '@angular/core';
import { Header} from './models/header.model';
import {Featured} from './models/featured-content.model';

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
}
