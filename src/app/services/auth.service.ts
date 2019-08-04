import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseUrl} from './base-url';

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
}
