import { Component, OnInit } from '@angular/core';

import { DailyDeductionService } from '../service/dailydeduction.service';
import { DailyDeduction } from '../service/dailydeduction';
import { baseProductionUrl } from '../utils/app.constants'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-edit-deduction',
    templateUrl: './edit-deduction.component.html',
    styleUrls: ['./edit-deduction.component.scss']
})
export class EditDeductionComponent implements OnInit {

    constructor(
        public deductionService: DailyDeductionService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getDeduction();
    }

    deduction = new DailyDeduction();
    id = this.route.snapshot.params['id'];

    getDeduction() {
        this.deductionService.getDeduction(this.id)
            .subscribe(deduction => {
                this.deduction = deduction;
            })
    }

    updateDeduction() {
        this.deductionService.updateDeduction(this.id, this.deduction)
            .subscribe(() => this.goBack())
    }

    goBack() {
        this.router.navigate([`/${baseProductionUrl}/dailydeduction`])
    }
}
