import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccueilComponent} from './accueil/accueil.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {PatientComponent} from './patient/patient.component';
import {RouterModule} from '@angular/router';
import {PatientAddComponent} from './patient-add/patient-add.component';


@NgModule({
    declarations: [
        AccueilComponent,
        PatientComponent,
        PatientAddComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
    ]
})
export class PagesModule {
}
