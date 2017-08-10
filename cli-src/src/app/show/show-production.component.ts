import { Component, OnInit } from '@angular/core';

import { DailyProductionService } from '../service/dailyproduction.service'
import { DailyProduct } from '../service/dailyproduction'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show-production',
  templateUrl: './show-production.component.html',
  styleUrls: ['./show-production.component.scss']
})
export class ShowProductionComponent implements OnInit {

  constructor(
     public productionService:DailyProductionService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getProduction();
  }

  production:DailyProduct;
  getProduction(){
    var id = this.route.snapshot.params['id'];
    this.productionService.getProduction(id)
        .subscribe(production=>{
          this.production = production;
        })
  }
  goBack(){
    this.router.navigate(['/dailyproduction'])
  }
}
