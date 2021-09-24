import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  // addp (xyz:any){
  //   return this.http.post("http://localhost:3000/addproduct",{"data":xyz})
  // }
  getdetails(xyz:any){
    console.log("dataservices-get details", xyz)
    return this.http.put("http://localhost:3000/getdetails",{"data":xyz})
  }

  upp(xyz:any){
    console.log("dataservices", xyz)
    return this.http.put("http://localhost:3000/updetails",{"data":xyz})
  }
}
