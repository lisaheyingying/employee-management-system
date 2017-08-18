import { Component, OnInit } from '@angular/core';
import { SingleTabComponent } from '../../components/tab/single-tab/single-tab.component';
import { TabsComponent } from '../../components/tab/tabs/tabs.component';
import { MenuComponent } from '../../components/menu/menu.component';
// import { TabsModule } from 'ng2-tabs'
@Component({
    selector: 'production-overview',
    templateUrl: './production-overview.component.html',
    styleUrls: ['./production-overview.component.scss']
})
export class ProductionOverview implements OnInit {

    tabs: any[] = [
        {
            "key": "车间产量", "values": [
                { "title": "车间月产量汇总", "routerLink": "monthlyproduction" },
                { "title": "车间日产量汇总", "routerLink": "dailyproduction" }
            ]
        },
        {
            "key": "扣款", "values": [
                { "title": "每月扣款汇总", "routerLink": "monthlydeduction" },
                { "title": "每日扣款汇总", "routerLink": "dailydeduction" }
            ]
        },
        {
            "key": "修布", "values": [
                { "title": "每月修布汇总", "routerLink": "monthlymending" },
                { "title": "每日修布汇总", "routerLink": "dailymending" }
            ]
        },
        {
            "key": "外出修布", "values": [
                { "title": "每月外出修布汇总", "routerLink": "monthlyoending" },
                { "title": "每日外出修布汇总", "routerLink": "dailyoending" }
            ]
        },
        {
            "key": "下机考核", "values": [
                { "title": "每月考核汇总", "routerLink": "monthlyassesing" },
                { "title": "每日考核汇总", "routerLink": "dailyassessing" }
            ]
        },

    ]
    constructor(

    ) { }
    ngOnInit() {
    }
}