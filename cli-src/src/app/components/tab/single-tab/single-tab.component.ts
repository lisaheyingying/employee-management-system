import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component'


@Component({
    selector: 'single-tab',
    templateUrl: './single-tab.component.html',
    styleUrls: ['./single-tab.component.scss']
})

export class SingleTabComponent implements OnInit {
    selected: boolean = false;
    @Input() tabTitle: string;
    constructor(private tabs: TabsComponent) { }
    ngOnInit() {
        this.tabs.addTab(this);
    }
}