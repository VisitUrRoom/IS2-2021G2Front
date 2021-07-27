import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


const API_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  /*getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + '/public/test/areaadmin', { responseType: 'text' });
  }*/
}