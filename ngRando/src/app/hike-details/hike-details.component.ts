import { Component, OnInit } from '@angular/core';
import { Hike } from '../shared/hike';
import { HikeComponent } from '../hike/hike.component';
import { HikeService } from '../hike/hike.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hike-details',
  templateUrl: './hike-details.component.html',
  styleUrls: ['./hike-details.component.css']
})
export class HikeDetailsComponent implements OnInit {
num: string;
  constructor(private _route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    this.num = `Details ${id}`;

  }
  goBack() {
    this._router.navigate(['hike']);
  }
}
