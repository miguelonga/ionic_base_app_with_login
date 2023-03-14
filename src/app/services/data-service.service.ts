import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Match } from '../models/match.model';
import { fakeData, fakeUsers } from './fake.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Match[] = []
  constructor() {}

  load(){
    return of(this.data)
  }
}
