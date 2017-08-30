import { Component, OnInit } from '@angular/core';

import { DailyDeductionService } from '../service/dailydeduction.service'
import { DailyDeduction } from '../service/dailydeduction'
import { baseProductionUrl } from '../utils/app.constants'

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-deduction',
  templateUrl: './add-deduction.component.html',
  //styleUrls: ['./add-deduction.component.css']
})
export class AddDeductionComponent implements OnInit {

  constructor(
     public deductionService:DailyDeductionService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
  }
  model = new DailyDeduction();
  addDeduction(){
    this.model.date = this.model.date.toString()
    this.deductionService.addDeduction(this.model)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate([`/${baseProductionUrl}/dailydeduction`])
  }
}