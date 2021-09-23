import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookappointComponent } from './bookappoint/bookappoint.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyrecordsComponent } from './myrecords/myrecords.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { SignupComponent } from './signup/signup.component';
import { UsermenuComponent } from './usermenu/usermenu.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'usermenu',canActivate:[AuthGuard],component:UsermenuComponent,
children:[
  {path:'',component:PatientprofileComponent},
  {path:'appointments',component:AppointmentsComponent},
  {path:'myrecords',component:MyrecordsComponent},
  {path:'bookappoint',component:BookappointComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
