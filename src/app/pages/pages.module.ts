import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccueilComponent} from './accueil/accueil.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {PatientComponent} from './patient/patient.component';
import {RouterModule} from '@angular/router';
import {PatientAddComponent} from './patient-add/patient-add.component';
import {RendezVousComponent} from './rendez-vous/rendez-vous.component';
import {RendezVousAddComponent} from './rendez-vous-add/rendez-vous-add.component';
import {ConsultationAddComponent} from './consultation-add/consultation-add.component';
import {ConsultationComponent} from './consultation/consultation.component';
import {ProfilComponent} from './profil/profil.component';
import {IonicSelectableModule} from 'ionic-selectable';
import {DatePickerModule} from 'ionic4-date-picker';
import {MenuComponent} from './menu/menu.component';
import {PatientPopoverComponent} from './patient-popover/patient-popover.component';
import {PatientRvComponent} from './patient-rv/patient-rv.component';


@NgModule({
    declarations: [
        AccueilComponent,
        PatientComponent,
        PatientAddComponent,
        RendezVousComponent,
        RendezVousAddComponent,
        ConsultationAddComponent,
        ConsultationComponent,
        ProfilComponent,
        MenuComponent,
        PatientPopoverComponent,
        PatientRvComponent,
    ],
    entryComponents: [PatientPopoverComponent]
    ,
    exports: [
        MenuComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        IonicSelectableModule,
        DatePickerModule,
    ]
})
export class PagesModule {
}
