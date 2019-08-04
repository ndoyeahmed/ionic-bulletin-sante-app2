import { Component, OnInit } from '@angular/core';
import {UtilisateurModel} from '../../models/utilisateur.model';
import {AuthService} from '../../services/auth.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

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
      private toast: ToastController,
      private router: Router
  ) {}

  ngOnInit(): void {}
  clear() {
    this.utilisateur = new UtilisateurModel();
  }

  login() {
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
        this.toast.create({
          message: 'Login ou mot de passe incorrect',
          duration: 3000,
          animated: true,
          position: 'top',
          mode: 'ios'
        }).then(x => x.present());
      }, () => {
        console.log('all ok');
        this.router.navigate(['/accueil']);
      });
    } else {
      this.toast.create({
        message: 'Veuillez remplir tous les champs SVP',
        duration: 3000,
        animated: true,
        position: 'top',
        mode: 'ios'
      }).then(x => x.present());
    }
  }

}
