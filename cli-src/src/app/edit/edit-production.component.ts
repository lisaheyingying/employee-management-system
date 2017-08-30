import { Component, OnInit } from '@angular/core';

import { DailyProductionService } from '../service/dailyproduction.service';
import { DailyProduct } from '../service/dailyproduction';
import { baseProductionUrl, products } from '../utils/app.constants'

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
    production = new DailyProduct();
    productCategory = products;
    ngOnInit() {
        this.getProduction();
    }


    id = this.route.snapshot.params['id'];

    getProduction() {
        this.productionService.getProduction(this.id)
            .subscribe(production => {
               this.production = production;
            })
    }

    updateProduction() {
        this.production.date = this.production.date.toString()
        this.productCategory.forEach(product => {
            this.production[`${product.key}`] = this.production[`${product.key}`] || 0;
        })
        this.production.shift = this.production.shift || '早班'
        this.productionService.updateProduction(this.id, this.production)
            .subscribe(() => this.goBack())
    }

    goBack() {
        this.router.navigate([`/${baseProductionUrl}/dailyproduction`])
    }
}
