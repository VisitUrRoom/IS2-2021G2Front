import { Component, OnInit } from '@angular/core';
import {styles} from "../../assets/ts/stylemap";
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
//import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import {Title, DomSanitizer} from '@angular/platform-browser';
import { RoomService } from '../_services/room-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Room } from './room';
import {formatCurrency} from "@angular/common";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  content?: string;
  title = 'VisitUrRoom';
  public rooms!: Room[];
  public knowRoom!: Room;
  public editRoom!: Room;
  public deleteRoom!: Room;
  currentUser: any;

  public lat: number;
  public lng: number;
  public zoom: number;
  public styles = styles;
  //public selectedAddress: PlaceResult;

  constructor(private token: TokenStorageService, private titleService: Title, private roomService: RoomService) {
    this.lat = 4.6097100;
    this.lng = -74.0817500;
    this.zoom = 15;
  }

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

  public searchRooms(key: string): void{
    const results: Room[] = [];
    for (const room of this.rooms){
      if (room.title.toLowerCase().indexOf(key.toLowerCase()) ! == -1) {
        results.push(room);
      }
    }
    this.rooms = results;
    if (results.length === 0 || !key){
      this.getRooms();
    }
  }


  public onOpenModal(room: Room, mode: string): void{
    const container =document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if (mode === 'know'){
      this.knowRoom = room;
      button.setAttribute('data-target','#knowRoom');
    }

    container?.appendChild(button);
    button.click();
  }

  public locateCaster(data: string){
    return parseFloat(data);
  }
}
