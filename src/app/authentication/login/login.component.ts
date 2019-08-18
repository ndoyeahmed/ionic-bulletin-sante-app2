import { Component, OnInit } from '@angular/core';
import {UtilisateurModel} from '../../models/utilisateur.model';
import {AuthService} from '../../services/auth.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Utilitaire} from '../../utils/utilitaire';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  utilisateur: UtilisateurModel = new UtilisateurModel();
  errorMessage = '';

  constructor(
      private auth: AuthService,
      private router: Router,
      private utils: Utilitaire
  ) {}

  ngOnInit(): void {}
  clear() {
    this.utilisateur = new UtilisateurModel();
  }

  login() {
    const load = this.utils.load();
    load.then(x => x.present());
    if (this.utilisateur && this.utilisateur.email && this.utilisateur.password) {
      const user = {
        email: this.utilisateur.email,
        password: this.utilisateur.password
      };
      console.log(user);
      this.auth.login(user).subscribe(data => {
        localStorage.setItem('userConnected', JSON.stringify(data.success));
        this.clear();
      }, error => {
        load.then(x => x.dismiss());
        this.utils.toastError('Login ou mot de passe incorrect')
            .then(x => x.present());
      }, () => {
        console.log('all ok');
        load.then(x => x.dismiss());
        this.router.navigate(['/accueil']);
      });
    } else {
      load.then(x => x.dismiss());
      this.utils.toastWarning('Veuillez remplir tous les champs SVP')
          .then(x => x.present());
    }
  }

}
