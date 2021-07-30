import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookappointComponent } from './bookappoint/bookappoint.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyrecordsComponent } from './myrecords/myrecords.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { UsermenuComponent } from './usermenu/usermenu.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'usermenu',component:UsermenuComponent,
  children:[
    {path:'patientprofile',component:PatientprofileComponent},
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
