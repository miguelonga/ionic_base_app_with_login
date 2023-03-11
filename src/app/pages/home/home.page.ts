import { Component } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { Match } from '../../models/match.model';
import { ModalController } from '@ionic/angular';
import { UserSettingsComponent } from '../../components/user-settings/user-settings.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  matches: Match[] = []
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
    this.matchesService.getMatches().subscribe(matches => { this.matches = matches})
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
    this.matches = this.matchesService.matches
  }

  openMatch(matchId:number){
    this.router.navigate(['match-detail', matchId])
  }
}
