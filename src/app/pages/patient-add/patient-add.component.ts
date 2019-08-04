import { Component, OnInit } from '@angular/core';
import {PatientModel} from '../../models/patient.model';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss'],
})
export class PatientAddComponent implements OnInit {

  patient: PatientModel = new PatientModel();
  constructor() { }

  ngOnInit() {}

    save() {
    }
}
