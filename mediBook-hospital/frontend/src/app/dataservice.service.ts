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
    // console.log("getting details of", xyz)
    return this.http.get("http://localhost:3000/getdetails/" + xyz)
  }

  upp(xyz:any){
    console.log("dataservices", xyz)
    return this.http.put("http://localhost:3000/updetails",{"data":xyz})
  }
  update(id:any){
    return this.http.put("http://localhost:3000/update" , id).subscribe(data =>{console.log(data)})
  }

  getrecords(id:any){
    return this.http.get("http://localhost:3000/getrecords/" + id)
  }
}
