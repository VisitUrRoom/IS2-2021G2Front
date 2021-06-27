import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiServerUrl =environment.apiBaseUrl  ;

  constructor(private http: HttpClient) { }

  public getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(`${this.apiServerUrl}/api/rooms/lista`)
  }

  public addRoom(room:Room): Observable<Room>{
    return this.http.post<Room>(`${this.apiServerUrl}/api/rooms`, room);
  }

  public updateRoom(room:Room): Observable<Room>{
    return this.http.put<Room>(`${this.apiServerUrl}/api/rooms/${room.id}`, room);
  }

  public deleteRoom(roomId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/room/delete/${roomId}`);
  }
}
