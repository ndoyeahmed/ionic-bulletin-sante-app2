import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './pages/accueil/accueil.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginComponent} from './authentication/login/login.component';
import {PatientComponent} from './pages/patient/patient.component';
import {PatientAddComponent} from './pages/patient-add/patient-add.component';
import {RendezVousComponent} from './pages/rendez-vous/rendez-vous.component';
import {RendezVousAddComponent} from './pages/rendez-vous-add/rendez-vous-add.component';
import {ConsultationComponent} from './pages/consultation/consultation.component';
import {ConsultationAddComponent} from './pages/consultation-add/consultation-add.component';
import {ProfilComponent} from './pages/profil/profil.component';
import {PatientRvComponent} from './pages/patient-rv/patient-rv.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    pathMatch: 'full',
    component: AccueilComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    pathMatch: 'full',
    component: AccueilComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'patient',
    pathMatch: 'full',
    component: PatientComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'patient-add',
    pathMatch: 'full',
    component: PatientAddComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'rendez-vous',
    pathMatch: 'full',
    component: RendezVousComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'rendez-vous-add',
    pathMatch: 'full',
    component: RendezVousAddComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'consultation',
    pathMatch: 'full',
    component: ConsultationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'consultation-add',
    pathMatch: 'full',
    component: ConsultationAddComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfilComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'patient-rv/:id',
    pathMatch: 'full',
    component: PatientRvComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
