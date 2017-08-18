import { Component, OnInit } from '@angular/core';
import { DailyDeductionService } from '../../../service/dailydeduction.service'
import { EmpService } from '../../../service/emp.service'
import { DailyDeduction } from '../../../service/dailyDeduction'
import { deductHeader } from '../../../utils/dataModel'
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment'

@Component({
    selector: 'app-dailydeduction',
    templateUrl: './dailydeduction.component.html',
    styleUrls: ['./dailydeduction.component.scss']
})

export class DailyDeductionComponent implements OnInit {
    //deductions: any[] = [];
    header: any[] = deductHeader;
    content: any[] = [];
    page: string = 'dailyDeduction'
    pageTitle: string = '每日扣款汇总'
    selectedDate: String = moment().format('YYYY-MM-DD');


    constructor(
        public dailyDeductionService: DailyDeductionService,
        public empService: EmpService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getDeductions(this.selectedDate);
    }


    getDeductions(date) {
        this.dailyDeductionService.getDeductions(date)
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
                                this.dailyDeductionService.addDeduction(newDeduction)
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
        this.dailyDeductionService.deleteDeduction(id)
            .subscribe(() => {
                this.getDeductions(this.selectedDate);
            });
    }
    goBack() {
        this.router.navigate(['/production-overview/dailydeduction'])
    }
}