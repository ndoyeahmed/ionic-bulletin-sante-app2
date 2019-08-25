import { Component, OnInit } from '@angular/core';
import {Utilitaire} from '../../utils/utilitaire';
import {RendezVousService} from '../../services/rendez-vous.service';
import {RendezVousModel} from '../../models/rendez-vous.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-rv',
  templateUrl: './patient-rv.component.html',
  styleUrls: ['./patient-rv.component.scss'],
})
export class PatientRvComponent implements OnInit {
  loading = this.utils.load();
  rendezVousFilter = [] as RendezVousModel[];
  rendezVous = [] as RendezVousModel[];
  id = 0;

  constructor(
      private utils: Utilitaire,
      private rvService: RendezVousService,
      private activatedroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  ionViewWillEnter() {
    this.loadList();
  }

  loadList() {
    this.loading.then(x => x.present());
    this.id = Number(this.activatedroute.snapshot.paramMap.get('id'));
    if (this.id !== 0) {
      this.rendezVousFilter = null;
      this.rvService.allRVByPatientId(this.id).subscribe(data => {
        this.rendezVous = data as RendezVousModel[];
      }, error => {
        console.log(error);
        this.loading.then(x => x.dismiss());
      }, () => {
        this.loading.then(x => x.dismiss());
      });
    } else {
      this.loading.then(x => x.dismiss());
    }
  }

  search(event) {
    const term: string = event.target.value;
    if (!term) {
      this.rendezVousFilter = null;
    } else {
      this.rendezVousFilter = this.rendezVous.filter(x =>
          x.libelle.toLocaleLowerCase().includes(term.toLocaleLowerCase())
          || x.patient.cin.toLowerCase().includes(term.toLowerCase())
          || x.patient.nom.toLowerCase().includes(term.toLowerCase())
          || x.patient.prenom.toLowerCase().includes(term.toLowerCase())
          || x.patient.telephone.toLowerCase().includes(term.toLowerCase())
      );
    }
  }

  cancelSearch(event) {
    event.target.value = '';
    this.rendezVousFilter = null;
  }

}
