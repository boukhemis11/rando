import { Component, OnInit } from '@angular/core';
import { Hike } from '../shared/hike';
import { HikeService } from './hike.service';



@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css']
})
export class HikeComponent implements OnInit {

  hikes: Hike[];

  searchTerm: string;

  constructor (private _hikeService: HikeService) {
    this._hikeService = _hikeService;

  }
  ngOnInit() {
    // this.hikes = this._hikeService.getHikes();
    this._hikeService.getHikes()
         .subscribe(res => this.hikes = res, err => console.error(err.status) );
    console.log(this.hikes);
  }
  toggleToMyHike(hikeToAdd ) {
console.log( 'ajouter' + hikeToAdd.name );
  }

}
