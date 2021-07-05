import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../gridview/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http : HttpClient) { }

  public addRooms(room: Room): Observable<Room> {
      return this.http.post<Room>(`${this.apiServerUrl}/api/rooms`, room)
  }
  public getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(`${this.apiServerUrl}/room/all`)
  }
  public updateRoom(room:Room): Observable<Room>{
    return this.http.put<Room>(`${this.apiServerUrl}/room/update`, room);
  }

  public deleteRoom(roomId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/room/delete/${roomId}`);
  }

}