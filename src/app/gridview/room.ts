import {SafeUrl} from "@angular/platform-browser";

export interface Room {
    id: number;
    title : string;
    direccion : string;
    lat: string;
    lng: string;
    superficie : number;
    area : number;
    price : number;
    image : any;
    desctription : string;
}
