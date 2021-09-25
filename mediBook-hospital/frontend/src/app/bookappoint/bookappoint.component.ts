import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-bookappoint',
  templateUrl: './bookappoint.component.html',
  styleUrls: ['./bookappoint.component.css']
})
export class BookappointComponent implements OnInit {
  Doctor={
    mail:'',
    date:'',
    doctorname:'',
    doctortype:''
  };
  
 
  
  constructor(private dataservice: AuthService) { }
  bookNow(){
          
    this.dataservice.book(this.Doctor).subscribe((data)=>{
      console.log(data)
      alert('booked')
    })
}
    

  ngOnInit(): void {
    const mail=(localStorage.getItem('mail') || '{}');
    this.Doctor.mail = mail
    
  }

}
