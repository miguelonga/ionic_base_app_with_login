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
  matches: Array<Match> = []
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
    this.matchesService.filterOptions().subscribe(options => {
      this.options = options
      this.filter()
    }).unsubscribe()
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
      this.options = data
      this.filter()
    }
  }

  openMatch(matchId:number){
    this.router.navigate(['match-detail', matchId])
  }

  filter(){
    this.matchesService.getMatches().subscribe((matches) => {
      this.matches = matches
      if(this.options.level > 0) this.filterByUserLevel()
      if(this.options.indoor) this.filterOnlyIndoor()
      if(this.options.price.upper > 0) this.filterByPriceRange()
    }).unsubscribe()
  }

  private filterByUserLevel(){
    this.matches = this.matches.filter(match => {
      let diference = Math.abs(match.level - this.options.level)
      return diference <= 1
    })
  }

  filterOnlyIndoor(){
    this.matches = this.matches.filter(match => {
      return match.indoor === true
    })
  }

  private filterByPriceRange() {
    this.matches = this.matches.filter(match => {
      return match.price <= this.options.price.upper
    })
  }
}
