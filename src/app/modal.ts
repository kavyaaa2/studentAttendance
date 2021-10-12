export interface Student {
    id?:number,
    gender:string,
    studentName: string,
    studentEmail: string,
    phoneNumber: string,
    attendanceDates: Array<Date>
}
export interface Attendance {
    id?:number,
    attendance: Date,
    numStudents: number
}