import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {styles} from "../../assets/ts/stylemap";
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
//import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import {Title} from '@angular/platform-browser';
import { RoomService } from '../_services/room-service.service';
import { Room } from './room';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
  content?: string;
  title = 'VisitUrRoom';
 // public rooms: Room[];

  public lat: number;
  public lng: number;
  public zoom: number;
  public styles = styles;
  //public selectedAddress: PlaceResult;

  constructor(private titleService: Title, private userService: UserService, private roomService: RoomService) {
    this.lat = 4.6097100;
    this.lng = -74.0817500;
    this.zoom = 15;
  }

  public getRooms(): void{
    this.roomService.getRooms().subscribe(
      (response: Room[]) => {
        //this.rooms = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getRooms();
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
