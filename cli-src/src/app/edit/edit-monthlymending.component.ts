import { Component, OnInit } from '@angular/core';

import { MonthlyMendingService } from '../service/monthlymending.service';
import { MonthlyMending } from '../service/monthlymending';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-edit-monthlymending',
    templateUrl: './edit-monthlymending.component.html',
   // styleUrls: ['./edit-monthlymending.component.scss']
})
export class EditMonthlyMendingComponent implements OnInit {

    constructor(
        public mendingService: MonthlyMendingService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getMending();
    }

    mending = new MonthlyMending();
    id = this.route.snapshot.params['id'];

    getMending() {
        this.mendingService.getMending(this.id)
            .subscribe(mending => {
                this.mending = mending;
            })
    }

    updateMending() {
        this.mendingService.updateMending(this.id, this.mending)
            .subscribe(() => this.goBack())
    }

    goBack() {
        this.router.navigate(['/production-overview/monthlymending'])
    }
}
