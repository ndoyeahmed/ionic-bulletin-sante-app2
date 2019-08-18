import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-patient-popover',
  templateUrl: './patient-popover.component.html',
  styleUrls: ['./patient-popover.component.scss'],
})
export class PatientPopoverComponent implements OnInit {

  id: number;
  constructor(
      private navParams: NavParams,
      private popOver: PopoverController
  ) { }

  ngOnInit() {
    this.id = this.navParams.data.paramID;
  }

  async closePopOver() {
    await this.popOver.dismiss();
  }

}
