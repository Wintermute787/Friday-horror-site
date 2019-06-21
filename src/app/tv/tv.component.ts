import { Component, OnInit } from '@angular/core';
import {TvService} from '../tv.service';
import { Router } from '@angular/router';
import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
  providers: [TvService]
})
export class TVComponent implements OnInit {
constructor(private router: Router, private tvService: TvService) {}
tv: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.tv = this.tvService.getTv();
  }


}
