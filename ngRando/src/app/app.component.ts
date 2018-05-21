import { Component } from '@angular/core';
import { Hike } from './shared/hike';
import { HikeService } from './hike/hike.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hike = [];
  private _hikeService: HikeService;

  hikes: Hike[];

  constructor (_hikeService: HikeService) {
    this._hikeService = _hikeService;

  }

  ngOnInit() {
    // this.hikes = this._hikeService.getHikes();
    this._hikeService.getHikes()
         .subscribe(res => this.hikes = res, err => console.error(err.status) );
    console.log(this.hikes);
  }

}
