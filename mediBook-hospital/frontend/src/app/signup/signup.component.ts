import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from '../must-match.validator';
// import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
  './css/main.css',
  './css/util.css',
  './vendor/bootstrap/css/bootstrap.min.css',
  './fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  './fonts/iconic/css/material-design-iconic-font.min.css',
  './vendor/animate/animate.css',
  './vendor/css-hamburgers/hamburgers.min.css',
  './vendor/animsition/css/animsition.min.css',
  './vendor/select2/select2.min.css',
  './vendor/daterangepicker/daterangepicker.css']
})

export class SignupComponent implements OnInit{
  
  
  registerForm: FormGroup = new FormGroup({});
  // registerForm: FormGroup;
  submitted=false;
  constructor(private fb: FormBuilder) { }


  ngOnInit(){
    this.registerForm=this.fb.group({
      email:['',[Validators.required],[Validators.email]],
      password:['',[Validators.minLength(6)]],
      confirmpassword:[''],
      gender:['',[Validators.required]],
      phone:['',[Validators.required]]

    },{
      validator: MustMatch('password','confirmpassword')
    });

  }
  get f(){

    return this.registerForm.controls;

  }
  submit(){
    this.submitted=true;

    console.log(this.registerForm.value);

  }
}
