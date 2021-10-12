import { Component, OnInit } from '@angular/core';
import { Student } from '../modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList:Array<Student> = []
  constructor(private studentService:StudentService) {
  
   console.log(this.studentList)
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.studentService.getAllstudent().subscribe((data) => {
      this.studentList = data
     })
  }

  deleteData(id:number){
    this.studentService.deletestudentById(id).subscribe((data) => {
      this.loadData()
    })
  }

}
