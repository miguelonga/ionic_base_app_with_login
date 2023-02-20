import { Component } from '@angular/core';
import { MatchesService } from '../services/matches.service';
import { Match } from '../models/match.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  matches: Array<Match> = []
  
  constructor(private matchesService: MatchesService) {
    this.matches = this.matchesService.getMatches()
  }
}
