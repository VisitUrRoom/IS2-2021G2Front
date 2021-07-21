import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment.prod';


const AUTH_API = environment.apiBaseUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/api/auth/signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, phone: string, password: string, firstName: string, tipopersona: string,
    userid: any, address: string, city: string, neighborhood: string): Observable<any> {
    return this.http.post(AUTH_API + '/api/auth/signup', {
      username,
      email,
      phone,
      password,
      firstName,
      tipopersona,
      userid,
      address,
      city,
      neighborhood
    }, httpOptions).pipe(map(res => res), catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {

      if (error.status === 404)   
        return throwError(error);  
    
      if(error.status === 400)  
        return throwError(error);  
      
      return throwError(error); 

    }
    /*
      if (error.status === 404)   
        return throwError(new NotFoundError(error));  
    
      if(error.status === 400)  
        return throwError(new BadRequest(error));  
      
      return throwError(new AppError(error));  
    }  
  */


}