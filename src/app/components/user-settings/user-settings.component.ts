import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  options = {
    level: 0,
    indoor: false,
    price: {
      lower: 0,
      upper: 0
    }
  }

  constructor(
    private modalCtrl: ModalController,
    private matchesService: MatchesService) { }

  ngOnInit() {
    console.log(this.options)
    this.matchesService.filterOptions().subscribe((options) => {
      this.options = options
    })
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.options, 'confirm');
  }
}