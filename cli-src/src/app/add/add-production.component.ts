import { Component, OnInit } from '@angular/core';

import { DailyProductionService } from '../service/dailyproduction.service'
import { DailyProduct } from '../service/dailyproduction'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-production',
  templateUrl: './add-production.component.html',
  //styleUrls: ['./add-production.component.css']
})
export class AddProductionComponent implements OnInit {

  constructor(
     public productionService:DailyProductionService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
  }
  model = new DailyProduct();
  addProduction(){
    this.productionService.addProduction(this.model)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate(['/production'])
  }
}