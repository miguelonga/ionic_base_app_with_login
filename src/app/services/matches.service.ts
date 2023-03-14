import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Match } from '../models/match.model';
import { DataService } from './data-service.service';
import { fakeUsers } from './fake.data';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  matches: Array<Match> = []
  options = {
    level: 0,
    indoor: false,
    price: {
      lower: 0,
      upper: 0
    }
  }
  constructor(private dataService: DataService) {
    this.getMatches().subscribe(matches => {this.matches = matches})
  }

  getMatches(){
    return this.dataService.load()
  }

  getById(id: number){
    let match = this.matches.find(match => match['id'] === id)
    return new Promise(resolve => resolve(match))
  }

  getPlayer(id: number){
    return fakeUsers.filter(user => user.id === id)[0]
  }

  filter(options: any){
    this.options = options
    this.getMatches().subscribe(matches => {
      this.matches = matches
      if(this.options.indoor) this.filterOnlyIndoor()
      if(this.options.level > 0) this.filterByUserLevel()
      if(this.options.price.upper > 0) this.filterByPriceRange()
    })

  }

  filterOnlyIndoor(){
    this.matches = this.matches.filter(match => match.indoor)
  }

  filterByUserLevel(){
    this.matches = this.matches.filter(match => {
      let diference = Math.abs(match.level - this.options.level)
      return diference <= 1
    })
  }

  filterByPriceRange() {
    this.matches = this.matches.filter(match => {
      return match.price <= this.options.price.upper
    })
  }
  
  filterOptions(){
    return of(this.options)
  }
}
