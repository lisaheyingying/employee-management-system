import { Component, OnInit } from '@angular/core';

import { DailyProductionService } from '../service/dailyproduction.service';
import { DailyProduct } from '../service/dailyproduction';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-edit-production',
    templateUrl: './edit-production.component.html',
    styleUrls: ['./edit-production.component.scss']
})
export class EditProductionComponent implements OnInit {

    constructor(
        public productionService: DailyProductionService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getProduction();
    }

    production = new DailyProduct();
    id = this.route.snapshot.params['id'];

    getProduction() {
        this.productionService.getProduction(this.id)
            .subscribe(production => {
                this.production = production;
            })
    }

    updateProduction() {
        this.productionService.updateProduction(this.id, this.production)
            .subscribe(() => this.goBack())
    }

    goBack() {
        this.router.navigate(['/dailyproduction'])
    }
}
