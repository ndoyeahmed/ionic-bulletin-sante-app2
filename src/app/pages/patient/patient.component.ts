import { Component, OnInit } from '@angular/core';
import {PatientModel} from '../../models/patient.model';
import {PatientService} from '../../services/patient.service';
import {LoadingController} from '@ionic/angular';
import {Utilitaire} from '../../utils/utilitaire';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {

  patients = [] as PatientModel[];
  patientsFilter = null as PatientModel[];
  loading = this.utils.load();
  constructor(
      private patientService: PatientService,
      private utils: Utilitaire
      ) { }

  ngOnInit() {
    this.loadList();
  }

  ionViewWillEnter() {
    this.loadList();
  }

  loadList() {
    this.loading.then(x => x.present());
    this.patientsFilter = null;
    this.patientService.allPatient().subscribe(data => {
      this.patients = data as PatientModel[];
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
      this.patientsFilter = null;
    } else {
      this.patientsFilter = this.patients.filter(x =>
      x.nom.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      || x.prenom.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      || x.telephone.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      || x.cin.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
    }
  }

  cancelSearch(event) {
    event.target.value = '';
    this.patientsFilter = null;
  }
}
