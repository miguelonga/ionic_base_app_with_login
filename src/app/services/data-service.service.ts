import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { fakeData } from './fake.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  load(){
    return of(fakeData)
  }
}
