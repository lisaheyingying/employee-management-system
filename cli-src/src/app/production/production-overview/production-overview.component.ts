import { Component, OnInit } from '@angular/core';
import { SingleTabComponent } from '../../components/tab/single-tab/single-tab.component';
import { TabsComponent } from '../../components/tab/tabs/tabs.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { TabsModule } from 'ng2-tabs'
@Component({
    selector: 'production-overview',
    templateUrl: './production-overview.component.html',
    styleUrls: ['./production-overview.component.scss']
})
export class ProductionOverview implements OnInit {

    taboneTitle: string = '车间日产量表';
    tabtwoTitle: string = '日修布产量表';
    tabthrTitle: string = '月修布扣款/金额'
    menulist = [
        {"key":"车间月产量汇总", "values":[
            {"title":"车间日产量", "routerLink":"dailyproduction"}
        ]},
        {"key":"扣款每月汇总", "values":[
            {"title":"每日扣款", "routerLink":"dailydeduction"}
        ]},
        {"key":"修布每月汇总", "values":[
            {"title":"每日修布", "routerLink":"dailymeding"}
        ]},
        {"key":"外出修布每月汇总", "values":[
            {"title":"每日外出修布", "routerLink":"dailymeding"}
        ]},
         {"key":"考核每月汇总", "values":[
            {"title":"每日考核", "routerLink":"dailymeding"}
        ]},

    ]
    constructor(

    ) { }
    ngOnInit() { }
}