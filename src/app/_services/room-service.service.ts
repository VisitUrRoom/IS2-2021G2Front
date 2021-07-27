import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

import { Room } from '../gridview/room';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public addRooms(room: Room): Observable<any> {
    return this.http
      .post(`${this.apiServerUrl}/room/add`, room, httpOptions)
      .pipe(
        map((res) => res),
        catchError(this.handleError)
      );
  }
  public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiServerUrl}/room/all`, httpOptions);
  }
  public updateRoom(room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiServerUrl}/room/update`, room, httpOptions);
  }

  public deleteRoom(roomId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/room/delete/${roomId}`, httpOptions);
  }


  private handleError(error: HttpErrorResponse) {

    if (error.status === 404)   
      return throwError(error);  
  
    if(error.status === 400)  
      return throwError(error);  
    
    return throwError(error); 

  }
}
