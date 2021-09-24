import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';




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
    MenuheaderComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot()

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
