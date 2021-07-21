import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { APP_BASE_HREF } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MatCardModule } from '@angular/material/card';
import { ExtendedModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridviewComponent } from './gridview/gridview.component';
import { ScannerFormComponent } from './scannerform/scannerform.component';
import { RoomService } from './_services/room-service.service';
import { SafeUrlPipe } from './_helpers/safe-url.pipe';
import { CrearPropiedadComponent } from './crear-propiedad/crear-propiedad.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IMaskModule } from 'angular-imask';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GridviewComponent,
    ScannerFormComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ContactoComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    SafeUrlPipe,
    CrearPropiedadComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHNb4aI9XNZfT0SAPSe1jo9XvBTPMXIoU',
      libraries: ['places'],
      region: 'co',
    }),
    MatGoogleMapsAutocompleteModule,
    ExtendedModule,
    MatCardModule,

    MatButtonToggleModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    FlexLayoutModule,
    //environment,
    MarkdownModule,
    RouterModule,
    CommonModule,
    IMaskModule,
  ],
  providers: [
    RoomService,
    authInterceptorProviders,
    { provide: APP_BASE_HREF, useValue: '' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
