import { Component, OnInit } from '@angular/core';
import {styles} from "../../assets/ts/stylemap";
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
//import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import {Title} from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scannerform',
  templateUrl: './scannerform.component.html',
  styleUrls: ['./scannerform.component.css']
})
export class ScannerFormComponent implements OnInit {
  content?: string;
  title = 'VisitUrRoom';

  public lat: number;
  public lng: number;
  public zoom: number;
  public styles = styles;
  //public selectedAddress: PlaceResult;

  constructor(private titleService: Title) {
    this.lat = 4.6097100;
    this.lng = -74.0817500;
    this.zoom = 20;
  }


  ngOnInit(): void {
    this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 17;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.lat = location.latitude;
    this.lng = location.longitude;
  }

  onGermanAddressMapped($event: GermanAddress) {
    console.log('onGermanAddressMapped', $event);
  }
}
