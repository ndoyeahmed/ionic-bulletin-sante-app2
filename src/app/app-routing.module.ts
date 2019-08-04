import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './pages/accueil/accueil.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginComponent} from './authentication/login/login.component';
import {PatientComponent} from './pages/patient/patient.component';
import {PatientAddComponent} from './pages/patient-add/patient-add.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
