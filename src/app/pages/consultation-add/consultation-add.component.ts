import { Component, OnInit } from '@angular/core';
import {IonicSelectableComponent} from 'ionic-selectable';
import {ConsultationModel} from '../../models/consultation.model';
import {RendezVousModel} from '../../models/rendez-vous.model';
import {RendezVousService} from '../../services/rendez-vous.service';
import {Utilitaire} from '../../utils/utilitaire';
import {UtilisateurModel} from '../../models/utilisateur.model';

@Component({
  selector: 'app-consultation-add',
  templateUrl: './consultation-add.component.html',
  styleUrls: ['./consultation-add.component.scss'],
})
export class ConsultationAddComponent implements OnInit {
  rv: RendezVousModel;
  rendezVous = [] as RendezVousModel[];
  consultation: ConsultationModel = new ConsultationModel();
  loading = this.utils.load();

  constructor(
      private consultationService: RendezVousService,
      private utils: Utilitaire,
  ) { }

  ngOnInit() {
    this.loadList();
  }
  ionViewWillEnter() {
    this.rv = new RendezVousModel();
    this.loadList();
  }

  loadList() {
    this.loading.then(x => x.present());
    this.consultationService.allRV().subscribe( p => {
      this.rendezVous = p;
    }, error => {
      console.log(error);
      this.loading.then(x => x.dismiss());
    }, () => this.loading.then(x => x.dismiss()));
  }

  save() {
    this.loading.then(x => x.present());
    if (this.rv && this.consultation) {
      this.consultation.rendezVous = this.rv;
      this.consultation.utilisateur = JSON.parse(localStorage.getItem('userConnected')) as UtilisateurModel;
      this.consultationService.addConsultation(this.consultation).subscribe(data => {
        console.log(data);
        this.utils.toastSuccess('Opération effectuée avec succès')
            .then(x => x.present());
      }, error => {
        console.log(error);
        this.loading.then(x => x.dismiss());
        this.utils.toastError('Echec de l\'opération')
            .then(x => x.present());
      }, () => this.loading.then(x => x.dismiss()));
    } else {
      this.loading.then(x => x.dismiss());
      this.utils.toastWarning('Remplir tous les champs SVP')
          .then(x => x.present());
    }
  }

  rvChange($event: { component: IonicSelectableComponent; value: any }) {
    console.log(this.rv);
  }
}
