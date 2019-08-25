import { Component, OnInit } from '@angular/core';
import {ConsultationModel} from '../../models/consultation.model';
import {RendezVousService} from '../../services/rendez-vous.service';
import {Utilitaire} from '../../utils/utilitaire';
import {PatientModel} from '../../models/patient.model';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {
  consultationsFilter = [] as ConsultationModel[];
  consultations = [] as ConsultationModel[];
  loading = this.utils.load();

  constructor(
      private consultationService: RendezVousService,
      private utils: Utilitaire
  ) { }

  ngOnInit() { this.loadList(); }

  ionViewWillEnter() {
    this.loadList();
  }

  loadList() {
    this.loading.then(x => x.present());
    this.consultationsFilter = null;
    this.consultationService.allConsultation().subscribe(data => {
      this.consultations = data as ConsultationModel[];
    }, error => {
      console.log(error);
      this.loading.then(x => x.dismiss());
    }, () => {
      this.loading.then(x => x.dismiss());
    });
  }

  search(event) {
    const term: string = event.target.value;
    if (!term) {
      this.consultationsFilter = null;
    } else {
      this.consultationsFilter = this.consultations.filter(x =>
          x.diagnostic.toLocaleLowerCase().includes(term.toLocaleLowerCase())
          || x.prescription.toLowerCase().includes(term.toLowerCase())
          || x.rendezVous.libelle.toLowerCase().includes(term.toLowerCase())
          || x.rendezVous.patient.prenom.toLowerCase().includes(term.toLowerCase())
          || x.rendezVous.patient.nom.toLowerCase().includes(term.toLowerCase())
          || x.rendezVous.patient.cin.toLowerCase().includes(term.toLowerCase())
          || x.rendezVous.patient.telephone.toLowerCase().includes(term.toLowerCase()));
    }
  }

  cancelSearch(event) {
    event.target.value = '';
    this.consultationsFilter = null;
  }
}
