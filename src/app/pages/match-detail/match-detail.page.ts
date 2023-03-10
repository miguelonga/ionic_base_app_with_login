import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match.model';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
})
export class MatchDetailPage implements OnInit {
  match: Match = new Match

  constructor(
    private activatedRoute: ActivatedRoute,
    public matchesService: MatchesService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let matchId = +params['id']
      this._setMatch(matchId)
    })
  } 

  async _setMatch(id: number) {
    this.match = <Match>await this.matchesService.getById(id)
  }
}
