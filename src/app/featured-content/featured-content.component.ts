import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Featured} from '../models/featured-content.model';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.css']
})
export class FeaturedContentComponent  {
  @Input() childFeatured: Featured[];


}
