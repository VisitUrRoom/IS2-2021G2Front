<mat-card>
   <mat-card-title>Auto Parse Address</mat-card-title>
   <mat-card-content>
     <!-- #######   here we go !! ######-->
     <mat-search-google-maps-autocomplete appearance="outline"
                                          country="co"
                                          (onGermanAddressMapped)="onGermanAddressMapped($event)">
     ></mat-search-google-maps-autocomplete>
   </mat-card-content>
</mat-card>
import {Appearance, GermanAddress, Location} from '@angular-material-extensions/google-maps-autocomplete';

 onGermanAddressMapped($event;: GermanAddress;) {
    console.log('onGermanAddressMapped', $event);
  }