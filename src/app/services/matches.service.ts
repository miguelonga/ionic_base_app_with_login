import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { fakeData } from './fake.data';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  fakeData = fakeData
  options = {
    level: 0,
    indoor: false,
    price: {
      lower: 0,
      upper: 0
    }
  }
  constructor() {}

  getMatches(){
    return of(this.fakeData)
  }

  getById(id: number){
    let match = this.fakeData.find(match => match['id'] === id)
    return of(match)
  }

  filterOptions(){
    return of(this.options)
  }
}
