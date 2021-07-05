import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Room } from '../gridview/room';
import { RoomService } from '../_services/room-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  public rooms!: Room[];
  public editRoom!: Room;
  public deleteRoom!: Room;

  constructor(private token: TokenStorageService,  private roomService: RoomService) { }

  ngOnInit(): void {
    this.getRooms();
    this.currentUser = this.token.getUser();
  }

  public getRooms(): void{
    this.roomService.getRooms().subscribe(
      (response: Room[]) => {
        this.rooms = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public onUpdateRoom(room: Room): void{
    this.roomService.updateRoom(room).subscribe(
      (response: Room) =>{
        console.log(response);
        this.getRooms(); 
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onDeleteRoom(roomId: number): void{
    this.roomService.deleteRoom(roomId).subscribe(
      (response: void) =>{
        console.log(response);
        this.getRooms(); 
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
  public onOpenModal(room: Room, mode: string): void{
    const container =document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

  
    if (mode === 'edit'){
      this.editRoom = room;
      button.setAttribute('data-target','#updateRoomModal'); 
    }
    if (mode === 'delete'){
      this.deleteRoom = room;
      button.setAttribute('data-target','#deleteRoomModal'); 
    }
    
    container?.appendChild(button);
    button.click();
  }

}