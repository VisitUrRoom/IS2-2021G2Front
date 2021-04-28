import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VisitUrRoom';

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;

  constructor(){
    this.lat = 4.6097100;
    this.lng = -74.0817500;
    this.zoom = 15;
    this.mapTypeId = 'roadmap';
    
  }
}
