import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id: number = 0;
  studentForm: FormGroup;
  displayAnimation:boolean = false;
  constructor(private activeRoute: ActivatedRoute,private router:Router,private studentService:StudentService) {
    this.studentForm = new FormGroup({
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'country': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.studentService.getstudentByID(paramsData.id).subscribe((data) => {
        console.log(data)
        delete data.id
        this.studentForm.patchValue(data)
      })
    })
  }

  submitdata() {

    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.studentForm.valid){
      // console.log(this.studentForm.value)
      this.studentService.updatestudentById(this.id,this.studentForm.value).subscribe((data) => {
        this.router.navigate(["/student-list"])
      })
    }

  }

}
