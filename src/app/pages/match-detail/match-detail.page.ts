import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
})
export class MatchDetailPage implements OnInit {
  match: Match = {
    id: 2,
    level: 2.1,
    clubId: 8,
    players: [{id:1},{id:2},{id:3}],
    date: Date.now() + 10000000000,
    indoor: true,
    price: 11.2
  }

  constructor() { }

  ngOnInit() {
  }

}
