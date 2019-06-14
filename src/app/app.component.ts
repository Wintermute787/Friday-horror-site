import { Component } from '@angular/core';
import { Header} from './models/header.model';

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
}
