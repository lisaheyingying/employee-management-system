import { Component, OnInit } from '@angular/core';

import { DailyMendingService } from '../service/dailymending.service';
import { DailyMending } from '../service/dailymending';
import { baseProductionUrl } from '../utils/app.constants'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-edit-mending',
    templateUrl: './edit-mending.component.html',
    styleUrls: ['./edit-mending.component.scss']
})
export class EditMendingComponent implements OnInit {

    constructor(
        public mendingService: DailyMendingService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getMending();
    }

    mending = new DailyMending();
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
        this.router.navigate([`/${baseProductionUrl}/dailymending`])
    }
}
