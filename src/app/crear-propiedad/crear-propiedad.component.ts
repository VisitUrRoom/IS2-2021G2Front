import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  Location,
  Appearance,
  GermanAddress,
} from '@angular-material-extensions/google-maps-autocomplete';
import {} from '@agm/core/services/google-maps-types';
import PlaceResult = google.maps.places.PlaceResult;
import { styles } from '../../assets/ts/stylemap';
import { RoomService } from '../_services/room-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../gridview/room';
import { UserService } from '../_services/user.service';
import * as jQuery from 'jquery';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-crear-propiedad',
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CrearPropiedadComponent implements OnInit {
  content?: string;
  currentUser: any = false;
  isLoggedIn = false;

  public mask: any = {
    mask: Number,
    thousandsSeparator: '.',
    lazy: false,
  };
  public onFocus() {
    console.log('focus');
  }

  public onBlur() {
    console.log('blur');
  }

  public appearance = Appearance;
  public zoom: number = 18;
  public latitude: number = 4.60971;
  public longitude: number = -74.08175;
  public fijardireccion?: string = '';

  selectedAddresses: any = null;
  //public selectedAddress: PlaceResult;
  selectedAddress: any = null;
  public styles = styles;

  roomForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9]{0,50}$/),
    ]),
    direccion: new FormControl('', Validators.required),
    superficie: new FormControl('', Validators.required),
    areaConstruida: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    fotos: new FormControl(undefined),
    descripcion: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9]{1,300}$/),
    ]),
    tipo: new FormControl('', Validators.required),

  });

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = 'Algo salió mal';
  successfulMessage = "Publicación creada con éxito";

  constructor(
    private titleService: Title,
    private userService: UserService,
    private roomService: RoomService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const currentUser = this.tokenStorageService.getUser();
    }

    this.titleService.setTitle(
      'Home | @angular-material-extensions/google-maps-autocomplete'
    );

    this.zoom = 16;
    this.latitude = 4.60971;
    this.longitude = -74.08175;

    this.setCurrentPosition();

    this.userService.getPublicContent().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        console.log(err);
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 16;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
    this.fijardireccion = result.formatted_address;
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  onGermanAddressMapped($event: GermanAddress) {
    console.log('onGermanAddressMapped', $event);
  }

  crearInmueble(): void {
    const {
      Id,
      nombre,
      superficie,
      areaConstruida,
      precio,
      descripcion,
      address,
      fotos,
      tipo,
    } = this.roomForm.getRawValue();
    const room: Room = {
      id: Id,
      title: nombre,
      superficie,
      tipo: tipo,
      area: areaConstruida,
      price: precio,
      desctription: descripcion,
      lat: this.latitude,
      lng: this.longitude,
      direccion: '' + this.fijardireccion,
      image: fotos,
      ownerUser: null,
    };
    this.roomService.addRooms(room).subscribe(data => {
      alert(this.successfulMessage);
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      //this.successfulMessage = data.message;
    },
    err => {
      alert(err.error.message);
      console.log(err.error);
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    });
  }
}
