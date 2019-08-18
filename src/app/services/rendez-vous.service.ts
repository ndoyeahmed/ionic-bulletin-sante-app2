import {Injectable} from '@angular/core';
import {BaseUrl} from './base-url';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RendezVousModel} from '../models/rendez-vous.model';
import {ConsultationModel} from '../models/consultation.model';

@Injectable()
export class RendezVousService {

    private api = BaseUrl.baseUrl + '/api';
    constructor(
        private http: HttpClient
    ) {}

    allRV(): Observable<RendezVousModel[]> {
        return this.http.get<RendezVousModel[]>(this.api + '/all-rendez-vous');
    }

    allRVByPatientId(id: number): Observable<RendezVousModel[]> {
        return this.http.get<RendezVousModel[]>(this.api + '/get-rv-patient/' + id);
    }

    addRV(rv: RendezVousModel): Observable<any> {
        return this.http.post(this.api + '/add-rendez-vous', rv);
    }

    allConsultation(): Observable<ConsultationModel[]> {
        return this.http.get<ConsultationModel[]>(this.api + '/all-consultation');
    }

    addConsultation(consultation: ConsultationModel): Observable<any> {
        return this.http.post(this.api + '/add-consultation', consultation);
    }
}
