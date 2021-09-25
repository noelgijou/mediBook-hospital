import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {
  Profile={
    _id:'',

    name:'',
    age:'',
    phone:'',
    bloodgrp:'', 
  };

  constructor(private dataservice:DataserviceService, private router:Router) {
    
   }

  ngOnInit(): void {
    // console.log(user)
    const mail=localStorage.getItem('mail');
    this.dataservice.getdetails(mail).subscribe(data=>{
      console.log(data)
      this.Profile = JSON.parse(JSON.stringify(data))
      
    })
  }
userDetails(){
  console.log(localStorage.getItem('token'))

  console.log(this.Profile);

this.dataservice.update(this.Profile);
alert('Successfully Updated');


}


}
