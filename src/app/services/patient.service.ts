import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PatientModel} from '../models/patient.model';
import {Observable} from 'rxjs';
import {BaseUrl} from './base-url';

@Injectable()
export class PatientService {
    private api = BaseUrl.baseUrl + '/api';
    constructor(
        private http: HttpClient
    ) {}

    addPatient(patient: PatientModel): Observable<any> {
        return this.http.post(this.api + '/add-patient', patient);
    }

    allPatient(): Observable<PatientModel[]> {
        return this.http.get<PatientModel[]>(this.api + '/all-patient');
    }
}
