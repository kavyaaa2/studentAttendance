import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAttendanceStudentComponent } from './show-attendance-student.component';

describe('ShowAttendanceStudentComponent', () => {
  let component: ShowAttendanceStudentComponent;
  let fixture: ComponentFixture<ShowAttendanceStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAttendanceStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAttendanceStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
