import { Component, OnInit } from '@angular/core';

import { MonthlyMendingService } from '../service/monthlymending.service'
import { MonthlyMending } from '../service/monthlymending'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-mending',
  templateUrl: './add-mending.component.html',
  //styleUrls: ['./add-mending.component.css']
})
export class AddMonthlyMendingComponent implements OnInit {

  constructor(
     public mendingService:MonthlyMendingService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
  }
  mending = new MonthlyMending();
  addMending(){
    this.mendingService.addMending(this.mending)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate(['/production-overview/monthlymending'])
  }
}