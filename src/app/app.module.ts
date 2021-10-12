import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { ShowAttendanceStudentComponent } from './show-attendance-student/show-attendance-student.component';
import { DatePipe } from '@angular/common';
import { AttendanceGraphComponent } from './attendance-graph/attendance-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentAttendanceComponent,
    AttendanceListComponent,
    ShowAttendanceStudentComponent,
    AttendanceGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
