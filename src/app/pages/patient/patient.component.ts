import { Component, OnInit } from '@angular/core';
import {PatientModel} from '../../models/patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {

  patients = [] as string[];
  patientsFilter = null as string[];

  constructor() { }

  ngOnInit() {
    this.patients.push('item list 1');
    this.patients.push('item list 2');
    this.patients.push('item list 3');
    this.patients.push('item list 4');
    this.patients.push('item list 5');
    this.patients.push('item list 6');
    this.patients.push('item list 7');
    this.patients.push('item list 8');
    this.patients.push('item list 9');
  }

  search(event) {
    const term: string = event.target.value;
    if (!term) {
      this.patientsFilter = null;
    } else {
      this.patientsFilter = this.patients.filter(x =>
      x.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
    }
  }
}
