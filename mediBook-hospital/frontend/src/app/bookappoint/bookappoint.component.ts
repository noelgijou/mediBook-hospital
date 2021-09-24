import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookappoint',
  templateUrl: './bookappoint.component.html',
  styleUrls: ['./bookappoint.component.css']
})
export class BookappointComponent implements OnInit {
  Doctor={
    date:'',
    doctorname:'',
    doctortype:''
  };
  bookNow(){
          alert("Successful Login")
          // console.log("logincomponent")
          // alert(this.Doctor.date)
          // alert(this.Doctor.doctorname)
          console.log(this.Doctor)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
