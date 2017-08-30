import { Component, OnInit } from '@angular/core';
import { MonthlyDeductionService } from '../../../service/monthlydeduction.service'
import { EmpService } from '../../../service/emp.service'
import { MonthlyDeduction } from '../../../service/monthlydeduction'
import { deductHeader } from '../../../utils/dataModel'
import { baseProductionUrl } from '../../../utils/app.constants'
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment'

@Component({
    selector: 'app-MonthlyDeduction',
    templateUrl: './MonthlyDeduction.component.html',
    styleUrls: ['./MonthlyDeduction.component.scss']
})

export class MonthlyDeductionComponent implements OnInit {
    //deductions: any[] = [];
    header: any[] = deductHeader;
    content: any[] = [];
    page: string = 'MonthlyDeduction'
    pageTitle: string = '每月扣款汇总'
    selectedDate: String = moment().format('YYYY-MM');


    constructor(
        public MonthlyDeductionService: MonthlyDeductionService,
        public empService: EmpService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getDeductions(this.selectedDate);
    }


    getDeductions(date) {
        this.MonthlyDeductionService.getDeductions(date)
            .subscribe(deductions => {
                this.content = [];
                // if today is new created
                if (deductions.length < 1) {
                    this.empService.getEmployeesName()
                        .subscribe(employees => {
                            employees.forEach(employee => {
                                let newDeduction = {
                                    date: date,
                                    name: employee.name,
                                    shift: "甲班",
                                    area: '',
                                    money:0
                                }
                                this.content.push(newDeduction);
                                this.MonthlyDeductionService.addDeduction(newDeduction)
                                    .subscribe(() => this.goBack())
                            });
                        })
                }
                else {
                    this.content = deductions;
                }
            })
    }
    deleteDeduction(id) {
        this.MonthlyDeductionService.deleteDeduction(id)
            .subscribe(() => {
                this.getDeductions(this.selectedDate);
            });
    }
    goBack() {
        this.router.navigate([`/${baseProductionUrl}/MonthlyDeduction`])
    }
}