import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {styles} from "../../assets/ts/stylemap";
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
//import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
  content?: string;
  title = 'VisitUrRoom';

  public lat: number;
  public lng: number;
  public zoom: number;
  public styles = styles;
  //public selectedAddress: PlaceResult;

  constructor(private titleService: Title, private userService: UserService) {
    this.lat = 4.6097100;
    this.lng = -74.0817500;
    this.zoom = 15;
  }

  ngOnInit(): void {
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
