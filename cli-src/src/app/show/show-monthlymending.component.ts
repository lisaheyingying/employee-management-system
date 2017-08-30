import { Component, OnInit } from '@angular/core';

import { MonthlyMendingService } from '../service/monthlymending.service'
import { MonthlyMending } from '../service/monthlymending'
import { baseProductionUrl } from '../utils/app.constants'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show-mending',
  templateUrl: './show-mending.component.html',
  styleUrls: ['./show-mending.component.scss']
})
export class ShowMonthlyMendingComponent implements OnInit {

  constructor(
     public mendingService:MonthlyMendingService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getMending();
  }

  mending:MonthlyMending;
  getMending(){
    var id = this.route.snapshot.params['id'];
    this.mendingService.getMending(id)
        .subscribe(mending=>{
          this.mending = mending;
        })
  }
  goBack(){
    this.router.navigate([`/${baseProductionUrl}/monthlymending`])
  }
}
