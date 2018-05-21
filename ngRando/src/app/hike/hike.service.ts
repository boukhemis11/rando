import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Hike } from '../shared/hike';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class HikeService {

  constructor (private _http: Http) {}


  getHikes() {
    return this._http.get('../../assets/api/hikes.json')
    .do(x => console.log(x))
    .map(hikes => hikes.json());
  }

}
