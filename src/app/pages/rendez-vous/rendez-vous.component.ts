import { Component, OnInit } from '@angular/core';
import {RendezVousModel} from '../../models/rendez-vous.model';
import {Utilitaire} from '../../utils/utilitaire';
import {RendezVousService} from '../../services/rendez-vous.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss'],
})
export class RendezVousComponent implements OnInit {
  rendezVousFilter = [] as RendezVousModel[];
  rendezVous = [] as RendezVousModel[];
  loading = this.utils.load();

  constructor(
      private utils: Utilitaire,
      private rvService: RendezVousService
  ) { }

  ngOnInit() {
    this.loadList();
  }

  ionViewWillEnter() {
    this.loadList();
  }

  loadList() {
    this.loading.then(x => x.present());
    this.rendezVousFilter = null;
    this.rvService.allRV().subscribe(data => {
      this.rendezVous = data as RendezVousModel[];
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
      this.rendezVousFilter = null;
    } else {
      this.rendezVousFilter = this.rendezVous.filter(x =>
          x.libelle.toLocaleLowerCase().includes(term.toLocaleLowerCase())
          );
    }
  }

  cancelSearch(event) {
    event.target.value = '';
    this.rendezVousFilter = null;
  }
}
