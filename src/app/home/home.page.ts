import { Component } from '@angular/core';
import { MatchesService } from '../services/matches.service';
import { Match } from '../models/match.model';
import { ModalController } from '@ionic/angular';
import { UserSettingsComponent } from '../components/user-settings/user-settings.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  matches: Array<Match> = []
  options = {
    userLevel: 0,
    onlyIndoor: false,
    minPrice: 0,
    maxPrice: 0
  }

  constructor(
    private matchesService: MatchesService,
    private modalCtrl: ModalController,
    private router: Router) {}

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
    this.router.navigate(['match-detail', matchId])
  }

  filter(){
    if(this.options.userLevel > 0) this.filterByUserLevel()
    if(this.options.onlyIndoor) this.filterOnlyIndoor()
    if(this.options.maxPrice > 0) this.filterByPriceRange()
  }

  private filterByUserLevel(){
    this.matches = this.matches.filter(match => {
      let diference = Math.abs(match.level - this.options.userLevel)
      return diference <= 1
    })
  }

  private filterOnlyIndoor(){
    this.matches = this.matches.filter(match => {
      return match.indoor === true
    })
  }

  private filterByPriceRange() {
    this.matches = this.matches.filter(match => {
      return match.price <= this.options.maxPrice
    })
  }
}
