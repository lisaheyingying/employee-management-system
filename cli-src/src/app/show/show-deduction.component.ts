import { Component, OnInit } from '@angular/core';

import { DailyDeductionService } from '../service/dailydeduction.service'
import { DailyDeduction } from '../service/dailydeduction'
import { baseProductionUrl } from '../utils/app.constants'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show-deduction',
  templateUrl: './show-deduction.component.html',
  styleUrls: ['./show-deduction.component.scss']
})
export class ShowDeductionComponent implements OnInit {

  constructor(
     public deductionService:DailyDeductionService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getDeduction();
  }

  deduction:DailyDeduction;
  getDeduction(){
    var id = this.route.snapshot.params['id'];
    this.deductionService.getDeduction(id)
        .subscribe(deduction=>{
          this.deduction = deduction;
        })
  }
  goBack(){
    this.router.navigate([`/${baseProductionUrl}/dailydeduction`])
  }
}
