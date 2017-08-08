import { Component, OnInit } from '@angular/core';
import { DailyProductionService } from '../service/dailyproduction.service'
import { EmpService } from '../emp.service'
import { DailyProduct } from '../service/dailyproduction'
import { productHeader, productCategoryMap } from '../dataModel'
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment'

@Component({
    selector: 'app-dailyproduction',
    templateUrl: './dailyproduction.component.html',
    styleUrls: ['./dailyproduction.component.scss']
})

export class DailyProductionComponent implements OnInit {
    //productions: any[] = [];
    header: any[] = productHeader;
    content: any[] = [];
    page: string = 'Production'
    selectedDate: String = moment().format('YYYY-MM-DD');


    constructor(
        public dailyProductionService: DailyProductionService,
        public empService: EmpService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getProductions(this.selectedDate);
    }


    getProductions(date) {
        this.dailyProductionService.getProductions(date)
            .subscribe(productions => {
                this.content = [];
                // if today is new created
                if (productions.length < 1) {
                    this.empService.getEmployeesName()
                        .subscribe(employees => {
                            employees.forEach(employee => {
                                let newProduction = {
                                    date: date,
                                    name: employee.name,
                                    shift: "day",
                                    area: '',
                                    c1: 0,
                                    c2: 0,
                                    c3: 0,
                                    c4: 0,
                                    c5: 0,
                                    c6: 0,
                                    c7: 0
                                }
                                this.content.push(newProduction);
                                this.dailyProductionService.addProduction(newProduction)
                                    .subscribe(() => this.goBack())
                            });
                        })
                }
                else {
                    this.content = productions;
                }
            })
    }
    deleteProduction(id) {
        this.dailyProductionService.deleteProduction(id)
            .subscribe(() => {
                this.getProductions(this.selectedDate);
            });
    }
    goBack() {
        this.router.navigate(['/production'])
    }
}