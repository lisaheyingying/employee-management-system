import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service'
import { Employee } from '../employee'
import {employeeHeader} from '../dataModel'


@Component({
  selector: 'app-employman',
  templateUrl: './employman.component.html',
 
  styleUrls: ['./employman.component.scss']
})
export class EmploymanComponent implements OnInit {

  header: any[] = employeeHeader;
  content: any[] = [];
  page: string = 'Employee';


  constructor(
    public empService:EmpService,
    
  ) { }

  ngOnInit() {
    this.getEmployees();
    
  
  }
  employeeInstance:Employee;
  getEmployees(){
    this.empService.getEmployees()
        .subscribe(employees=>{
          this.content = employees;
        })
  }
  deleteEmployee(id){
    this.empService.deleteEmployee(id)
      .subscribe(()=>{
        this.getEmployees();
      });
  }
}
