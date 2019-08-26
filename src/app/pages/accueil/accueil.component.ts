import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UtilisateurModel} from '../../models/utilisateur.model';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  user: UtilisateurModel = new UtilisateurModel();

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userConnected')) as UtilisateurModel;
  }

}
