import { Component, OnInit } from '@angular/core';

import { DailyMendingService } from '../service/dailymending.service'
import { DailyMending } from '../service/dailymending'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-mending',
  templateUrl: './add-mending.component.html',
  //styleUrls: ['./add-mending.component.css']
})
export class AddMendingComponent implements OnInit {

  constructor(
     public mendingService:DailyMendingService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
  }
  mending = new DailyMending();
  addMending(){
    this.mendingService.addMending(this.mending)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate(['/production-overview/dailymending'])
  }
}