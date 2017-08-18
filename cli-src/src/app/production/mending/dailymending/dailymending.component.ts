import { Component, OnInit } from '@angular/core';
import { DailyMendingService } from '../../../service/dailymending.service'
import { EmpService } from '../../../service/emp.service'
import { DailyMending } from '../../../service/dailymending'
import { mendingHeader } from '../../../utils/dataModel'
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment'

@Component({
    selector: 'app-dailymending',
    templateUrl: './dailymending.component.html',
    styleUrls: ['./dailymending.component.scss']
})

export class DailyMendingComponent implements OnInit {
    //mendings: any[] = [];
    header: any[] = mendingHeader;
    content: any[] = [];
    page: string = 'dailyMending'
    pageTitle: string = '每日修布汇总'
    selectedDate: String = moment().format('YYYY-MM-DD');


    constructor(
        public dailyMendingService: DailyMendingService,
        public empService: EmpService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getMendings(this.selectedDate);
    }


    getMendings(date) {
        this.dailyMendingService.getMendings(date)
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
                                    category: '粗支/细支',
                                    production:0
                                }
                                this.content.push(newMending);
                                this.dailyMendingService.addMending(newMending)
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
        this.dailyMendingService.deleteMending(id)
            .subscribe(() => {
                this.getMendings(this.selectedDate);
            });
    }
    goBack() {
        this.router.navigate(['/dailymending'])
    }
}