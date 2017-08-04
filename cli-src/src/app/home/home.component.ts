import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service'
import { Employee } from '../employee'
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {
  imageEmployee = '../../assets/images/employ.png';
  imageAttendance = '../../assets/images/attendance.png';
  imagePaySlip = '../../assets/images/money.png';
  imageProduction = '../../assets/images/production.png';
  constructor(
    public empService:EmpService
  ) { }

  ngOnInit() {
  }
  employees:Employee;
}


