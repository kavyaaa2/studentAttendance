import { Component, OnInit } from '@angular/core';
import { Attendance } from '../modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance-graph',
  templateUrl: './attendance-graph.component.html',
  styleUrls: ['./attendance-graph.component.css']
})
export class AttendanceGraphComponent implements OnInit {

  // single:any[] | undefined
  // view: [number, number] = [700, 400];

  // options
  // showXAxis = true;
  // showYAxis = true;
  // gradient = false;
  // showLegend = true;
  // showXAxisLabel = true;
  // xAxisLabel = 'Country';
  // showYAxisLabel = true;
  // yAxisLabel = 'Population';

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // constructor() {
  //   Object.assign(this, {this.single})
    
  // }
  // ngOnInit(){
    
  // }
  // onSelect(event) {
  //   console.log(event);
  // }
  attendance:Array<Attendance> = [];

  chartData: any[] | undefined=[];
  view: [number, number] = [1000, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
  showYAxisLabel = true;
  yAxisLabel = 'No. of Students';

  constructor(private studentService:StudentService) {
    this.studentService.getAllAttendance().subscribe((data)=>{
      
      let arr = []
      for(let i =0;i<data.length;i++){
        arr.push({
          name: data[i].attendance,
          value: data[i].numStudents
        })
      }
      this.chartData = arr
      console.log(this.chartData)
      Object.assign(this.attendance, this.chartData)
    })
    
  }

  ngOnInit(): void {
    
  }
}
