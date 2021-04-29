import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core'

import { AppComponent } from './app.component';
import { RoomService } from './room.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHNb4aI9XNZfT0SAPSe1jo9XvBTPMXIoU'
    })
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
