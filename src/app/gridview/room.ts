import {SafeUrl} from "@angular/platform-browser";

export interface Room {
    id: number;
    title : string;
    direccion : string;
    lat: number;
    lng: number;
    superficie : number;
    area : number;
    price :string;
    image : any;
    desctription : string;
    tipo: string;
    ownerUser: any;
}

