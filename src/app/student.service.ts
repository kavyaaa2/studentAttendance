import { Injectable } from '@angular/core';
import { Student,Attendance } from './modal';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentData:Array<Student> = [];
  constructor(private http:HttpClient) { }

  savestudent(student:Student){
    // this.studentData.push(student)
    return this.http.post(`https://615eb8523d1491001755aab7.mockapi.io/student`,student)
  }

  getAllstudent(){
    return this.http.get<Array<Student>>(`https://615eb8523d1491001755aab7.mockapi.io/student`)
  }

  getstudentByID(id:number){
    return this.http.get<Student>(`https://615eb8523d1491001755aab7.mockapi.io/student/${id}`)
  }

  updatestudentById(studentId:number,studentdata:Student){
    return this.http.put(`https://615eb8523d1491001755aab7.mockapi.io/student/${studentId}`,studentdata)
  }

  deletestudentById(id:number){
    return this.http.delete(`https://615eb8523d1491001755aab7.mockapi.io/student/${id}`)
  }

  saveAttendance(attendance:Attendance){
    // this.studentData.push(student)
    return this.http.post(`https://615eb8523d1491001755aab7.mockapi.io/attendance`,attendance)
  }

  getAllAttendance(){
    return this.http.get<Array<Attendance>>(`https://615eb8523d1491001755aab7.mockapi.io/attendance`)
  }

  // getstudentByID(id:number){
  //   return this.http.get<Student>(`https://615eb8523d1491001755aab7.mockapi.io/student/${id}`)
  // }

  updateAttendanceById(attendanceId:number|undefined,attendance:Attendance){
    return this.http.put(`https://615eb8523d1491001755aab7.mockapi.io/attendance/${attendanceId}`,attendance)
  }

  // deletestudentById(id:number){
  //   return this.http.delete(`https://615eb8523d1491001755aab7.mockapi.io/student/${id}`)
  // }
}
