import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {styles} from "../../assets/ts/stylemap";
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
//import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import {Title} from '@angular/platform-browser';
import { RoomService } from '../_services/room-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../gridview/room';

@Component({
  selector: 'app-createapt',
  templateUrl: './createapt.component.html',
  styleUrls: ['./createapt.component.css']
})
export class CreateAptComponent implements OnInit {
  content?: string;
  title = 'VisitUrRoom';

  roomForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{0,50}$/)]),
    direccion: new FormControl(''),
    superficie: new FormControl('', Validators.required),
    areaConstruida: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    fotos: new FormControl(undefined),
    descripcion: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{1,300}$/)])
  });

  public lat: number;
  public lng: number;
  public zoom: number;
  public styles = styles;
  //public selectedAddress: PlaceResult;

  constructor(private titleService: Title, private userService: UserService, private roomService: RoomService) {
    this.lat = 4.6097100;
    this.lng = -74.0817500;
    this.zoom = 20;
  }


  ngOnInit(): void {
    this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

    this.setCurrentPosition();
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        console.log(err)
        this.content = JSON.parse(err.error).message;
      }
    );
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

  crearInmueble(): void {
    const {nombre, superficie, areaConstruida, precio, descripcion, direccion} = this.roomForm.getRawValue();
    const room: Room = {
      title: nombre,
      superficie,
      area: areaConstruida,
      price: precio,
      desctription: descripcion,
      lat: direccion.geometry.location.lat(),
      lng: direccion.geometry.location.lng(),
      direccion: direccion.formatted_address,
      image: ''
    }
    this.roomService.addRooms(room)
      .subscribe(data => console.log(data));
  }
}
