import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-myrecords',
  templateUrl: './myrecords.component.html',
  styleUrls: ['./myrecords.component.css']
})
export class MyrecordsComponent implements OnInit {
  recdets=[{
    _id:'',
    name:'',
    date:'',
    details:''
  }]

  constructor(private dataservice: DataserviceService) { }

  ngOnInit(): void {
    const mail=(localStorage.getItem('mail') || '{}');
    this.dataservice.getrecords(mail).subscribe((data)=>{
      this.recdets = JSON.parse(JSON.stringify(data))
      console.log(data)
    })
  }

}
