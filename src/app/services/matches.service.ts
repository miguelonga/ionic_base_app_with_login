import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  fakeData = [
    {
      level: 3.1,
      clubId: 8,
      players: [{userId:1}],
      date: Date.now() + 18000000,
      indoor: true,
      price: 14
    },
    {
      level: 2.1,
      clubId: 8,
      players: [{userId:1},{userId:2}],
      date: Date.now() + 10000000000,
      indoor: true,
      price: 11.2
    },
    {
      level: 4.3,
      clubId: 8,
      players: [{userId:1}],
      date: Date.now() + 10200000000,
      indoor: false,
      price: 9
    },
    {
      level: 1.5,
      clubId: 8,
      players: [{userId:1}],
      date: Date.now() + 180000000000,
      indoor: false,
      price: 11
    },
    {
      level: 3.1,
      clubId: 8,
      players: [{userId:1}],
      date: Date.now() + 1802200000,
      indoor: false,
      price: 10
    },
    {
      level: 4.5,
      clubId: 10,
      players: [{userId:1},{userId:2},{userId:3}],
      date: Date.now() + 18000000 + 18000000 + 18000000,
      indoor: true,
      price: 13
    },
  ]
  matches: Array<Match> = []
  constructor() {}

  getMatches(){
    return this.matches = this.fakeData
  }

}
