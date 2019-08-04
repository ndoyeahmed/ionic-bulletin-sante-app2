import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../../models/patient.model';
import {LoadingController, ToastController} from '@ionic/angular';
import {PatientService} from '../../services/patient.service';
import {Utilitaire} from '../../utils/utilitaire';

@Component({
    selector: 'app-patient-add',
    templateUrl: './patient-add.component.html',
    styleUrls: ['./patient-add.component.scss'],
})
export class PatientAddComponent implements OnInit {

    patient: PatientModel = new PatientModel();
    patients = [] as PatientModel[];
    cinExist = false;
    loading = this.utils.load();

    constructor(
        private patientService: PatientService,
        private utils: Utilitaire
    ) {}

    ngOnInit() {
      this.loadList();
    }

    ionViewWillEnter() {
        this.patient = new PatientModel();
        this.patients = [] as PatientModel[];
        this.cinExist = false;
        this.loadList();
    }

    loadList() {
        this.loading.then(x => x.present());
        this.patientService.allPatient().subscribe(data => {
            this.patients = data as PatientModel[];
        }, error => {
            console.log(error);
            this.loading.then(x => x.dismiss());
        }, () => {
            this.loading.then(x => x.dismiss());
        });
    }

    onInputCIN(event) {
      const term = event.target.value as string;
      if (!term) {
        this.cinExist = false;
      } else {
        const filtre = this.patients.filter(x =>
            x.cin.toLocaleLowerCase() === term.toLocaleLowerCase());
        if (filtre.length > 0) {
          this.cinExist = true;
          this.utils.toastWarning('Attention ce patient existe deja')
              .then(x => x.present());
        } else {
          this.cinExist = false;
        }
      }
      console.log(this.cinExist);
    }

    save() {
        if (this.patient && this.patient.genre && this.patient.nom && this.patient.prenom
            && this.patient.adresse && this.patient.telephone && this.patient.cin) {
          this.patientService.addPatient(this.patient).subscribe(data => {
              this.utils.toastSuccess('Opération effectuée avec succès')
                  .then(x => x.present());
              this.patient = new PatientModel();
          }, error => {
            console.log(error);
            this.utils.toastError('Echec de l\'opération')
                .then(x => x.present());
          }, () => console.log('on complete'));
        } else {
            this.utils.toastWarning('Veuillez remplir tous les Champs SVP')
                .then(x => x.present());
        }
    }

    onSelectedGenre(event) {
        this.patient.genre = event.target.value as string;
        console.log(this.patient.genre);
    }
}
