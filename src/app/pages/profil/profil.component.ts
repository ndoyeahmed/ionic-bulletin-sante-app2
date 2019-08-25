import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UtilisateurModel} from '../../models/utilisateur.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {

  user: UtilisateurModel = new UtilisateurModel();

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.identity();
  }

  ionViewWillEnter() {
    this.user = this.auth.identity();
  }

}
