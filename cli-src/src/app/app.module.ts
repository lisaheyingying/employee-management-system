import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TabsModule } from 'ng2-tabs';
import { NgbModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';



import { TabsComponent } from './components/tab/tabs/tabs.component'
import { SingleTabComponent } from './components/tab/single-tab/single-tab.component'
import { MenuComponent } from './components/menu/menu.component'
import { StandardTableComponent } from './components/standard-table/standard-table.component';

import { ProductionOverview } from './production/production-overview/production-overview.component'

import { EmploymanComponent } from './employman/employman.component';
import { EmpService } from './service/emp.service';
import { AddComponent } from './add/add-employee.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { EmploymanPipe } from './employman/employman.component.pipe';

import { DailyProductionComponent } from './production/dailyproduction/dailyproduction.component';
import { DailyProductionService } from './service/dailyproduction.service';
import { AddProductionComponent } from './add/add-production.component';
import { EditProductionComponent } from './edit/edit-production.component'
import { ShowProductionComponent } from './show/show-production.component'



import { DailyDeductionComponent } from './production/dailyDeduction/dailyDeduction.component'
import { DailyDeductionService } from './service/dailydeduction.service';
import { ShowDeductionComponent } from './show/show-deduction.component'
import { AddDeductionComponent } from './add/add-deduction.component'
import { EditDeductionComponent } from './edit/edit-deduction.component'


import { DailyMendingComponent } from './production/dailymending/dailymending.component'
import { DailyMendingService } from './service/dailymending.service';
import { ShowMendingComponent } from './show/show-mending.component'
import { AddMendingComponent } from './add/add-mending.component'
import { EditMendingComponent } from './edit/edit-mending.component'

import { MonthlyMendingComponent } from './production/monthlymending/monthlymending.component'
import { MonthlyMendingService } from './service/monthlymending.service';
import { AddMonthlyMendingComponent } from './add/add-monthlymending.component'
import { EditMonthlyMendingComponent } from './edit/edit-monthlymending.component'
import { ShowMonthlyMendingComponent } from './show/show-monthlymending.component'

//import '../assets/styles/styles.scss';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StandardTableComponent,
    TabsComponent,
    SingleTabComponent,
    MenuComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    EmploymanComponent,
    EmploymanPipe,
    ProductionOverview,
    DailyProductionComponent,
    AddProductionComponent,
    EditProductionComponent,
    ShowProductionComponent,
    DailyDeductionComponent,
    AddDeductionComponent,
    ShowDeductionComponent,
    EditDeductionComponent,
    DailyMendingComponent,
    AddMendingComponent,
    ShowMendingComponent,
    EditMendingComponent,
    MonthlyMendingComponent,
    AddMonthlyMendingComponent,
    EditMonthlyMendingComponent,
    ShowMonthlyMendingComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NguiDatetimePickerModule,
    ReactiveFormsModule,
    TabsModule,
    NgbModule
  ],
  providers: [EmpService, DailyProductionService, DailyDeductionService, DailyMendingService, MonthlyMendingService, NgbAccordionConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
