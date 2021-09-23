import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menuheader',
  templateUrl: './menuheader.component.html',
  styleUrls: ['./menuheader.component.css']
})
export class MenuheaderComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router) { }
  logoutUser(){
    localStorage.removeItem('token')
  }

  ngOnInit(): void {
  }

}
