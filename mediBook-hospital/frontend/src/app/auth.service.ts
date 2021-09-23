import { Injectable, Type } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loginUser(User:any){
    console.log("authservice")
    let httpHeaders=new HttpHeaders
    ({"content-Type":"application/json"});
    console.log(User)
    // return this.http.post("http://localhost:3000/login",User)
    return this.http.post<any>("http://localhost:3000/login",User,{headers:httpHeaders})
  }

  constructor(private http:HttpClient) { }

  loggedIn()
{
  return !!localStorage.getItem('token')
}



}

