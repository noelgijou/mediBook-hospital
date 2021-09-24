import { Injectable, Type } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserModel } from './signup/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loginUser(item: { mail: string; password: string; }){
    console.log("authservice")
    let httpHeaders=new HttpHeaders
    ({"content-Type":"application/json"});
    console.log(item)
    // return this.http.post("http://localhost:3000/login",User)
    // return this.http.post<any>("http://localhost:3000/login",User,{headers:httpHeaders})
    return this.http.post<any>("http://localhost:3000/login",{"user":item})

  }

  constructor(private http:HttpClient) { }

  loggedIn()
{
  return !!localStorage.getItem('token')
}
newUser(item: UserModel){
  console.log("Auth User",item)
  return this.http.post("http://localhost:3000/adduser",{"user":item})
  .subscribe(data=>{console.log(data)})
}



}

