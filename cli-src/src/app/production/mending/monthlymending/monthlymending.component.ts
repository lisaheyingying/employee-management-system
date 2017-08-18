import { Component, OnInit } from '@angular/core';
import { MonthlyMendingService } from '../../../service/monthlymending.service'
import { EmpService } from '../../../service/emp.service'
import { MonthlyMending } from '../../../service/monthlymending'
import { monthlyMendingHeader } from '../../../utils/dataModel'
import { baseProductionUrl } from '../../../utils/app.constants'
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment'

@Component({
    selector: 'app-monthlymending',
    templateUrl: './monthlymending.component.html',
    styleUrls: ['./monthlymending.component.scss']
})

export class MonthlyMendingComponent implements OnInit {
    //mendings: any[] = [];
    header: any[] = monthlyMendingHeader;
    content: any[] = [];
    page: string = 'monthlyMending'
    pageTitle: string = '每月修布汇总'
    selectedDate: String = moment().format('YYYY-MM-DD');


    constructor(
        public monthlyMendingService: MonthlyMendingService,
        public empService: EmpService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getMendings(this.selectedDate);
    }


    getMendings(date) {
        this.monthlyMendingService.getMendings(date)
            .subscribe(mendings => {
                this.content = [];
                // if today is new created
                if (mendings.length < 1) {
                    this.empService.getEmployeesName()
                        .subscribe(employees => {
                            employees.forEach(employee => {
                                let newMending = {
                                    date: date,
                                    name: employee.name,
                                    shift: "甲班",
                                    money: 0,
                                    bonus: 0
                                }
                                this.content.push(newMending);
                                this.monthlyMendingService.addMending(newMending)
                                    .subscribe(() => this.goBack())
                            });
                        })
                }
                else {
                    this.content = mendings;
                }
            })
    }
    deleteMending(id) {
        this.monthlyMendingService.deleteMending(id)
            .subscribe(() => {
                this.getMendings(this.selectedDate);
            });
    }
    goBack() {
        this.router.navigate(['/{{baseProductionUrl}}/monthlymending'])
    }
}