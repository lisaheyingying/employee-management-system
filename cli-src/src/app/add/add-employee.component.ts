import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service'
import { Employee } from '../employee'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddComponent implements OnInit {

  constructor(
     public empService:EmpService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
  }
  model = new Employee();
  addEmployee(){
    this.empService.addEmployee(this.model)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate(['/employee'])
  }
}
