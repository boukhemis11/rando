import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hike } from '../shared/hike';



@Component({
  selector: 'app-hike-summary',
  templateUrl: './hike-summary.component.html',
  styleUrls: ['./hike-summary.component.css']
})
export class HikeSummaryComponent implements OnInit {

  @Input() hike: Hike;
  @Output() addhike = new EventEmitter<Hike>();

  toggleTodoHike(isAdded: any) {
    console.log(isAdded);
    if (isAdded) {
       this.addhike.emit(this.hike);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
