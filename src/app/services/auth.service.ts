import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseUrl} from './base-url';
import {UtilisateurModel} from '../models/utilisateur.model';

@Injectable()
export class AuthService {
    private api = BaseUrl.baseUrl + '/api';

    constructor(private http: HttpClient) {}

    login(user: any): Observable<any> {
        return this.http.post(this.api + '/login', user);
    }

    isAuthenticated(): boolean {
        return localStorage.getItem('userConnected') !== null && localStorage.getItem('userConnected').length !== 0;
    }

    hasAuthority(authority: string, user: UtilisateurModel): boolean {
        if (user.profile.libelle === authority) {
            return true;
        } else {
            return false;
        }
    }

    identity() {
        return JSON.parse(localStorage.getItem('userConnected'));
    }
}
