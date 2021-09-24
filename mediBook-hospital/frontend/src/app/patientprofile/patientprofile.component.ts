import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

const mail="noelgijou@gmail.com"

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {
  Profile={
    name:'',
    age:'',
    phone:'',
    bloodgrp:'', 
  };

  constructor(private dataservice:DataserviceService, private router:Router) { }

  ngOnInit(): void {
    // console.log(user)
    this.dataservice.getdetails(mail).subscribe(data=>{
      console.log(data)
    })
  }
userDetails(){
  console.log(this.Profile);
}



}
