import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {TvService} from '../tv.service';


@Component({
  selector: 'app-tv-feed',
  templateUrl: './tv-feed.component.html',
  styleUrls: ['./tv-feed.component.css'],
  providers: [TvService]
})
export class TvFeedComponent implements OnInit {

  constructor(private router: Router, private tvService: TvService) { }
  tv: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.tv = this.tvService.getTv();
  }

}
