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
    constructor(

    ) { }
    ngOnInit() { }
}