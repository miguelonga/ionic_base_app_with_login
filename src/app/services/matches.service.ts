import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  fakeData = [
    {
      id: 1,
      level: 3.1,
      clubId: 8,
      players: [{id:1}],
      date: Date.now() + 18000000,
      indoor: true,
      price: 14
    },
    {
      id: 2,
      level: 2.1,
      clubId: 8,
      players: [{id:1},{id:2},{id:3}],
      date: Date.now() + 10000000000,
      indoor: true,
      price: 11.2
    },
    {
      id: 3,
      level: 4.3,
      clubId: 8,
      players: [{id:1},{id:2}],
      date: Date.now() + 10200000000,
      indoor: false,
      price: 9
    },
    {
      id: 4,
      level: 1.5,
      clubId: 8,
      players: [{id:1}],
      date: Date.now() + 180000000000,
      indoor: false,
      price: 11
    },
    {
      id: 5,
      level: 3.1,
      clubId: 8,
      players: [{id:1}],
      date: Date.now() + 1802200000,
      indoor: false,
      price: 10
    },
    {
      id: 6,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: Date.now() + 18000000 + 18000000 + 18000000,
      indoor: true,
      price: 13
    },
  ]
  
  constructor() {}

  getMatches(){
    return of(this.fakeData)
  }

}
