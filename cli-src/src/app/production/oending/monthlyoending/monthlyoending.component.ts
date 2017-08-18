import { Component, OnInit } from '@angular/core';
import { MonthlyOendingService } from '../../../service/monthlyoending.service'
import { EmpService } from '../../../service/emp.service'
import { MonthlyOending } from '../../../service/monthlyoending'
import { monthlyOendingHeader } from '../../../utils/dataModel'
import { baseProductionUrl } from '../../../utils/app.constants'
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment'

@Component({
    selector: 'app-monthlyOending',
    templateUrl: './monthlyOending.component.html',
    styleUrls: ['./monthlyOending.component.scss']
})

export class MonthlyOendingComponent implements OnInit {
    //Oendings: any[] = [];
    header: any[] = monthlyOendingHeader;
    content: any[] = [];
    page: string = 'monthlyOending'
    pageTitle: string = '每月外出修布汇总'
    selectedDate: String = moment().format('YYYY-MM');


    constructor(
        public monthlyOendingService: MonthlyOendingService,
        public empService: EmpService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getOendings(this.selectedDate);
    }


    getOendings(date) {
        this.monthlyOendingService.getoendings(date)
            .subscribe(Oendings => {
                this.content = [];
                // if today is new created
                if (Oendings.length < 1) {
                    this.empService.getEmployeesName()
                        .subscribe(employees => {
                            employees.forEach(employee => {
                                let newOending = {
                                    date: date,
                                    name: employee.name,
                                    shift: "甲班",
                                    money: 0,
                                    bonus: 0
                                }
                                this.content.push(newOending);
                                this.monthlyOendingService.addoending(newOending)
                                    .subscribe(() => this.goBack())
                            });
                        })
                }
                else {
                    this.content = Oendings;
                }
            })
    }
    deleteOending(id) {
        this.monthlyOendingService.deleteoending(id)
            .subscribe(() => {
                this.getOendings(this.selectedDate);
            });
    }
    goBack() {
        this.router.navigate(['/{{baseProductionUrl}}/monthlyOending'])
    }
}