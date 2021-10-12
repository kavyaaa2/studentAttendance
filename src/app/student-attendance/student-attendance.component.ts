import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student, Attendance } from '../modal';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css'],
})
export class StudentAttendanceComponent implements OnInit {
  studentForm!: FormGroup;
  constructor(private studentService: StudentService, private router: Router) {
    this.studentForm = new FormGroup({
      id: new FormControl('', Validators.required),
      attendanceDates: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  submitAttendance() {
    console.log('inside submitAttendance');
    let date: Date;
    Object.keys(this.studentForm.controls).forEach((field) => {
      const control = this.studentForm.get(field);
      // console.log(field)
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.studentForm.valid) {
      this.studentService.getstudentByID(this.studentForm.value.id).subscribe(
        (data) => {
          // console.log(data)
          date = this.studentForm.value.attendanceDates;
          let arr = [];
          if (data.attendanceDates) {
            arr = [
              ...data.attendanceDates,
              this.studentForm.value.attendanceDates,
            ];
          } else arr.push(this.studentForm.value.attendanceDates);
          // console.log(arr)
          this.studentForm.value.attendanceDates = arr;
          // console.log(this.studentForm.value);
          this.studentService
            .updatestudentById(
              this.studentForm.value.id,
              this.studentForm.value
            )
            .subscribe(
              () => {
                this.router.navigate([
                  `attendance-list/${this.studentForm.value.id}`,
                ]);
              },
              () => {
                alert('Something Went Wrong');
              }
            );

          //attendance feature

          this.studentService.getAllAttendance().subscribe(
            (data) => {
              console.log('Insidde attendance feature');
              console.log(date);
              console.log(this.studentForm.value.attendanceDates);
              if (data.length == 0) {
                this.studentService
                  .saveAttendance({
                    attendance: date,
                    numStudents: 1,
                  })
                  .subscribe();
              } else {
                let id:number | undefined;
                let flag = 0;
                for (let i = 0; i < data.length; i++) {
                  if (date == data[i].attendance) {
                    id=data[i].id
                    console.log("id="+id)
                    let num = data[i].numStudents + 1;
                    console.log("num="+num)
                    this.studentService
                    .updateAttendanceById(id,{
                      attendance: date,
                      numStudents: num,
                    })
                    .subscribe(()=>{
                      console.log("REQUEST MADE!")
                    },() => {
                      alert('Something Went Wrong');
                    });
                    flag = 1;
                    break;
                  }
                }
                if (flag == 0) {
                  this.studentService
                    .saveAttendance({
                      attendance: date,
                      numStudents: 1,
                    })
                    .subscribe();
                }
              }
            },
            () => {
              alert('Something went wrong!');
            }
          );
        },
        () => {
          alert('No such student, please try again!');
        }
      );

      }
  }
}
