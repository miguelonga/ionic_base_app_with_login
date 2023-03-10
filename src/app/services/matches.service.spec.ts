import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Match } from '../models/match.model';
import { DataService } from './data-service.service';

import { MatchesService } from './matches.service';

describe('MatchesService', () => {
  let service: MatchesService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesService);
    dataService = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter matches list with options object', () => {
    let matches = [1, 2, 3].map(index => {
      let match = new Match
      match.id = index
      match.indoor = true
      return match
    })
    matches[0].indoor = false
    spyOn(dataService, 'load').and.returnValue(of(matches))

    service.options.indoor = true
    service.filter(service.options)

    expect(service.matches.length).toEqual(2)
  })

  it('should filter by user level', () => {
    let userLevel = 9
    let matches = [1, 2, 3].map!(index => {
      let match = new Match
      match.level = (userLevel + 0.5)
      return match
    })
    let outOfLevelMatch = new Match
    outOfLevelMatch.level = (userLevel - 1.1)
    matches.push(outOfLevelMatch)
    spyOn(dataService, 'load').and.returnValue(of(matches))

    service.options.level = userLevel
    service.filter(service.options)

    expect(service.matches.length).toEqual(3)
  })

  it('should filter price range', () => {
    let matches = [1, 2, 3].map(index => {
      let match = new Match 
      match.price = index
      return match
    })
    let lowerPrice = 0
    let upperPrice = 1
    service.options.price.lower = lowerPrice
    service.options.price.upper = upperPrice
    spyOn(dataService, 'load').and.returnValue(of(matches))

    service.filter(service.options)

    expect(service.matches.length).toEqual(1)
  })
});
