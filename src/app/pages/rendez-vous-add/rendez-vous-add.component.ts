import { Component, OnInit } from '@angular/core';
import {RendezVousModel} from '../../models/rendez-vous.model';
import {RendezVousService} from '../../services/rendez-vous.service';
import {Utilitaire} from '../../utils/utilitaire';
import {PatientModel} from '../../models/patient.model';
import {PatientService} from '../../services/patient.service';
import {IonicSelectableComponent} from 'ionic-selectable';
import * as moment from 'moment';

@Component({
  selector: 'app-rendez-vous-add',
  templateUrl: './rendez-vous-add.component.html',
  styleUrls: ['./rendez-vous-add.component.scss'],
})
export class RendezVousAddComponent implements OnInit {

  rv: RendezVousModel = new RendezVousModel();
  patients = [] as PatientModel[];
  patient = new PatientModel();
  date: any;
  loading = this.utils.load();

  constructor(
      private rvService: RendezVousService,
      private utils: Utilitaire,
      private patientService: PatientService
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
    this.patientService.allPatient().subscribe( p => {
      this.patients = p;
    }, error => {
      console.log(error);
      this.loading.then(x => x.dismiss());
    }, () => this.loading.then(x => x.dismiss()));
  }

  save() {
    this.loading.then(x => x.present());
    if (this.date && this.rv && this.rv.libelle && this.patient) {
      this.rv.dateRendezVous = this.date;
      this.rv.patient = this.patient;
      this.rvService.addRV(this.rv).subscribe(data => {
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

  patientChange($event: { component: IonicSelectableComponent; value: any }) {
    console.log(this.patient);
  }

  dateSelected(event) {
    this.date = moment(event.target.value as Date);
    console.log(this.date);
  }
}
