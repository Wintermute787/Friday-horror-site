import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Header} from '../models/header.model';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.css']
})
export class HeaderListComponent {
  @Input() childHeaderList: Header[];

}
