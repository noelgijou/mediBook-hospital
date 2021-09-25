import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-bookappoint',
  templateUrl: './bookappoint.component.html',
  styleUrls: ['./bookappoint.component.css']
})
export class BookappointComponent implements OnInit {
  Doctor = {
    mail: '',
    date: '',
    doctorname: '',
    doctortype: ''
  };



  constructor(private dataservice: AuthService, private _router: Router, private _toastr: ToastrService) { }
  bookNow() {

    this.dataservice.book(this.Doctor).subscribe((data) => {
      console.log(data)
      // alert('Appointment Booked')
    })
    this._toastr.success("Appointment Booked!")
    this._router.navigate(['usermenu/appointments'])
  }


  ngOnInit(): void {
    const mail = (localStorage.getItem('mail') || '{}');
    this.Doctor.mail = mail

  }

}
