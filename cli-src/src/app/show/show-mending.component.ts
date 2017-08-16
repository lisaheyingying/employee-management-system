import { Component, OnInit } from '@angular/core';

import { DailyMendingService } from '../service/dailymending.service'
import { DailyMending } from '../service/dailymending'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show-mending',
  templateUrl: './show-mending.component.html',
  styleUrls: ['./show-mending.component.scss']
})
export class ShowMendingComponent implements OnInit {

  constructor(
     public mendingService:DailyMendingService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getMending();
  }

  mending:DailyMending;
  getMending(){
    var id = this.route.snapshot.params['id'];
    this.mendingService.getMending(id)
        .subscribe(mending=>{
          this.mending = mending;
        })
  }
  goBack(){
    this.router.navigate(['/production-overview/dailymending'])
  }
}
