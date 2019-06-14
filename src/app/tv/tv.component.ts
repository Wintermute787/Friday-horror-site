import { Component, Input, Output, EventEmitter } from '@angular/core';
import {TV} from '../models/TV.model';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent  {
  @Input() childTvList: TV[];
  @Output() clickSender = new EventEmitter();


}
