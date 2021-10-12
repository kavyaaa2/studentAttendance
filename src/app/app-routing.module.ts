import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { ShowAttendanceStudentComponent } from './show-attendance-student/show-attendance-student.component';
import { AttendanceGraphComponent } from './attendance-graph/attendance-graph.component';
const routes: Routes = [
  // { path: '', redirectTo: '' },
  {
    path : "",
    component : AttendanceGraphComponent
  },
  {
    path : "graph",
    component : AttendanceGraphComponent
  },
  {
    path : "student-list",
    component : StudentListComponent
  },
  {
    path : "student-create",
    component : StudentCreateComponent
  },
  {
    path : "student-edit/:id",
    component : StudentEditComponent
  },
  {
    path : "student-attendance",
    component : StudentAttendanceComponent
  },
  {
    path : "attendance-list",
    component : AttendanceListComponent,
  },
  {
    path: "attendance-list/:id",
    component: ShowAttendanceStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
