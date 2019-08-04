import {Component} from '@angular/core';
import {UtilisateurModel} from '../models/utilisateur.model';
import {AuthService} from '../services/auth.service';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    utilisateur: UtilisateurModel = new UtilisateurModel();
    errorMessage = '';

    constructor(
        private auth: AuthService,
        private toast: ToastController
    ) {
    }

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
                this.clear();
                this.toast.create({
                    message: 'Login ou mot de passe incorrect',
                    duration: 3000,
                    animated: true,
                    position: 'top',
                    mode: 'ios'
                }).then(x => x.present());
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
