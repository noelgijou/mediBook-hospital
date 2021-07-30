import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MyrecordsComponent } from './myrecords/myrecords.component';
import { BookappointComponent } from './bookappoint/bookappoint.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { MenuheaderComponent } from './menuheader/menuheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PatienthomeComponent,
    DoctorhomeComponent,
    AdminhomeComponent,
    PatientprofileComponent,
    AppointmentsComponent,
    MyrecordsComponent,
    BookappointComponent,
    UsermenuComponent,
    MenuheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
