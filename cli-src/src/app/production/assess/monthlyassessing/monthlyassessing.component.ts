import { Component, OnInit } from '@angular/core';
import { DailyAssessingService } from '../../../service/dailyassessing.service'
import { EmpService } from '../../../service/emp.service'
import { DailyAssessing } from '../../../service/dailyassessing'
import { assessingHeader } from '../../../utils/dataModel'
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment'

@Component({
    selector: 'app-dailyassessing',
    templateUrl: './dailyassessing.component.html',
    styleUrls: ['./dailyassessing.component.scss']
})

export class DailyAssessingComponent implements OnInit {
    //assessings: any[] = [];
    header: any[] = assessingHeader;
    content: any[] = [];
    page: string = 'dailyAssessing'
    pageTitle: string = '每日考核汇总'
    selectedDate: String = moment().format('YYYY-MM');


    constructor(
        public dailyAssessingService: DailyAssessingService,
        public empService: EmpService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getAssessings(this.selectedDate);
    }


    getAssessings(date) {
        this.dailyAssessingService.getAssessings(date)
            .subscribe(assessings => {
                this.content = [];
                // if today is new created
                if (assessings.length < 1) {
                    this.empService.getEmployeesName()
                        .subscribe(employees => {
                            employees.forEach(employee => {
                                let newAssessing = {
                                    date: date,
                                    name: employee.name,
                                    shift: "甲班",
                                    category: '粗支/细支',
                                    production:0
                                }
                                this.content.push(newAssessing);
                                this.dailyAssessingService.addAssessing(newAssessing)
                                    .subscribe(() => this.goBack())
                            });
                        })
                }
                else {
                    this.content = assessings;
                }
            })
    }
    deleteAssessing(id) {
        this.dailyAssessingService.deleteAssessing(id)
            .subscribe(() => {
                this.getAssessings(this.selectedDate);
            });
    }
    goBack() {
        this.router.navigate(['/dailyassessing'])
    }
}