import { Component } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { Match, MatchesInDay } from '../../models/match.model';
import { ModalController } from '@ionic/angular';
import { UserSettingsComponent } from '../../components/user-settings/user-settings.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  matchesPerDays: MatchesInDay[] = []
  options = {
    level: 0,
    indoor: false,
    price: {
      upper: 0,
      lower: 0
    }
  }

  constructor(
    private matchesService: MatchesService,
    private modalCtrl: ModalController,
    private router: Router) {}

  ngOnInit(){
    this.getMatches()
  }

  getMatches() {
    this.matchesService.getMatches().subscribe(matches => { 
      this.componseGroups(matches)
    })
  }

  componseGroups(matches: Match[]){
    let result: MatchesInDay[] = []
    let daysToShow = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    daysToShow.forEach(days => {
      let today = new Date()
      let day = new Date().setDate(today.getDate() + days)
      today.setDate(today.getDate() + days)
      let matchesInDay = matches.filter(match => {
        let matchDay = new Date(match.date).getDate()
        return match ? matchDay === today.getDate() : null
      })
      if(matchesInDay.length > 0) result.push({date: new Date(day), matches: matchesInDay})
    })
    this.matchesPerDays = result
  }

  async openOptions(){
    const modal = await this.modalCtrl.create({
      component: UserSettingsComponent,
      componentProps: {
        options: this.options
      }
    })
    modal.present() 
    const {data, role} = await modal.onWillDismiss()
    if(role === 'confirm'){
      this.options = data || this.options
      this.filter()
    }
  }

  filter(){
    this.matchesService.filter(this.options)
    this.componseGroups(this.matchesService.matches)
  }

  openMatch(matchId:number){
    this.router.navigate(['match-detail', matchId])
  }
}
