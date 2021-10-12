import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {
  studentForm: FormGroup
  constructor(private studentService:StudentService, private activeRoute: ActivatedRoute,private router:Router) {
    this.studentForm = new FormGroup({
      'id': new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }
  submitStudentID(){
    this.router.navigate([`/attendance-list/${this.studentForm.value.id}`])
  }
}
