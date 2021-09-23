import { Component, OnInit } from '@angular/core';
// import { runInThisContext } from 'vm';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
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
export class LoginComponent implements OnInit {
  User={username:'',
        password:''};
        userVerify()
        {
          alert("Successful Login")
          // console.log("logincomponent")
          alert(this.User.username)
          alert(this.User.password)
          this.loginUser()
        }

  constructor(private _auth:AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  accountobj:any
  loginUser(){
    console.log("reached loginuser at login.component")
    // console.log(this.User)
    // this._auth.loginUser(this.User).subscribe(data=>{this.accountobj=data;alert(this.accountobj);});
    this._auth.loginUser(this.User)
    .subscribe(
      res=>{
      localStorage.setItem('token',res.token)
      this._router.navigate(['usermenu'])

    })
  }

}
