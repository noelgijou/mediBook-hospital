import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  bookdets=[{
    _id:'',
    date:"",
    doctor:"",
    doctortype:""
  }]
  constructor(private dataservice: AuthService) { }

  ngOnInit(): void {
    const mail=(localStorage.getItem('mail') || '{}');
    this.dataservice.getbook(mail).subscribe((data)=>{
      this.bookdets= JSON.parse(JSON.stringify(data))
      console.log(this.bookdets)
    })
  }

  del(id:any){
    this.dataservice.del(id._id)
      .subscribe((data) => {
        this.bookdets = this.bookdets.filter(p => p !== id);
      })
  }

}
