import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-show-attendance-student',
  templateUrl: './show-attendance-student.component.html',
  styleUrls: ['./show-attendance-student.component.css']
})
export class ShowAttendanceStudentComponent implements OnInit {
  id:number=0
  name:string=""
  data:object={}
  dates:Array<Date>=[]
  date2:any=[]
  constructor(private activeRoute: ActivatedRoute,private router:Router,private studentService:StudentService,private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.studentService.getstudentByID(paramsData.id).subscribe((data) => {
        this.name=data.studentName
        if(data.attendanceDates){
          this.dates=data.attendanceDates
          // console.log(data.attendanceDates)
        }
        this.dates.forEach((date)=>{
          // this.date=new Date();
          let latest_date =this.datepipe.transform(date, 'EEEE, MMMM d, y');
          // console.log(latest_date)
          this.date2.push(latest_date)
        })
      })
      
    })
  }

}
