import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ContactoComponent } from './contacto/contacto.component';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { CreateAptComponent } from './createapt/createapt.component';
import {GridviewComponent} from "./gridview/gridview.component";
import {ScannerFormComponent} from "./scannerform/scannerform.component";

const routes: Routes = [
   //Site routes goes here
   {
      path: '',
      component: SiteLayoutComponent,
      children: [
        { path: '', redirectTo:'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        { path: 'createapt', component: CreateAptComponent },
        { path: 'gridview', component: GridviewComponent},
        { path: 'scannerform', component: ScannerFormComponent},
        { path: 'profile', component: ProfileComponent },
        { path: 'user', component: BoardUserComponent },
        { path: 'mod', component: BoardModeratorComponent },
        { path: 'admin', component: BoardAdminComponent }

      ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
