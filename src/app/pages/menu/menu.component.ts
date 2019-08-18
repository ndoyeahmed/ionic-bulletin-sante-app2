import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UtilisateurModel} from '../../models/utilisateur.model';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  toggle = false;
  user: UtilisateurModel = new UtilisateurModel();
  constructor(
      private auth: AuthService,
      private menu: MenuController
  ) { }

  ngOnInit() {
    this.user = this.auth.identity();
  }

  ionViewWillEnter() {
    this.user = this.auth.identity();
  }

  ionWillOpen() {
    this.user = this.auth.identity();
  }

  async logout() {
    await this.menu.close('principal');
    localStorage.clear();
  }

  async close() {
    await this.menu.close('principal');
  }
}
