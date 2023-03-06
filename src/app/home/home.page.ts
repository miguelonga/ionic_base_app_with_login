import { Component } from '@angular/core';
import { MatchesService } from '../services/matches.service';
import { Match } from '../models/match.model';
import { ModalController, NavController } from '@ionic/angular';
import { UserSettingsComponent } from '../components/user-settings/user-settings.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  matches: Array<Match> | undefined

  constructor(
    private matchesService: MatchesService,
    private modalCtrl: ModalController,
    private router: Router) {
    
  }

  ngOnInit(){
    this.matchesService.getMatches().subscribe((matches) => {
      this.matches = matches
    })
  }

  async openOptions(){
    const modal = await this.modalCtrl.create({
      component: UserSettingsComponent
    })
    modal.present() 
    const {data, role} = await modal.onWillDismiss()
    if(role === 'confirm'){
      console.log(data)
    }
  }

  openMatch(matchId:number){
    this.router.navigateByUrl(`/match-detail/${matchId}`)
  }
}
