import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
})
export class MatchDetailPage implements OnInit {
  match: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchesService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let matchId = +params['id']
      
      this.matchService.getById(matchId).subscribe((match) => {
        this.match = match
      })
    })
    
  }

}
