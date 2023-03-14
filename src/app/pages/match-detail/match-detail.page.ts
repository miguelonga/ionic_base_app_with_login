import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match, Player } from 'src/app/models/match.model';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
})
export class MatchDetailPage implements OnInit {
  match: Match = new Match
  players: Player[] = []
  finishDate: number = 0

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
    this.players = this.match.players.map(player => {
      return this.matchesService.getPlayer(player.id)
    })
    let finishDate = new Date(this.match.date).setHours(new Date(this.match.date).getHours() + 2)
    this.finishDate = finishDate
  }

  calculateRate(total: number, winned: number) {
    return Math.round((winned * 100) / total)
  }
}
