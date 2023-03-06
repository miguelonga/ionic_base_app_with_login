import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { fakeData } from './fake.data';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  fakeData = fakeData
  constructor() {}

  getMatches(){
    return of(this.fakeData)
  }

  getById(id: number){
    let match = this.fakeData.find(match => match['id'] === id)
    return of(match)
  }

}
