import { Component, EventEmitter, Output } from '@angular/core';
import { SingleTabComponent } from '../single-tab/single-tab.component'

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent {
    tabs: SingleTabComponent[] = [];
    @Output() selected = new EventEmitter();
    addTab(tab: SingleTabComponent) {
        if (!this.tabs.length) {
            tab.selected = true;
        }
        this.tabs.push(tab);
    }
    selectTab(tab: SingleTabComponent) {
        this.tabs.map(tab => {
            tab.selected = false;
        })
        tab.selected = true;
        this.selected.emit({ selectedTab: tab });
    }
}