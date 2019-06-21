import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewsService} from '../news.service';

import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FeaturedService} from '../featured.service';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.css'],
  providers: [ FeaturedService]
})
export class FeaturedContentComponent implements OnInit {
  constructor(private route: Router, private featuredService: FeaturedService) {}
  featured: FirebaseObjectObservable<any[]>;
  ngOnInit() {
    this.featured = this.featuredService.getFeatured();
  }

}
