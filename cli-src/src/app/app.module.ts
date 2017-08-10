import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TabsModule } from 'ng2-tabs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add-employee.component';
import { AddProductionComponent } from './add/add-production.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { EmpService } from './emp.service';
import { EmploymanComponent } from './employman/employman.component';
import { StandardTableComponent } from './components/standard-table/standard-table.component';
import { DailyProductionComponent } from './production/dailyproduction/dailyproduction.component';
import { DailyProductionService } from './service/dailyproduction.service';
import { DailyDeductionService } from './service/dailydeduction.service';
import { EditProductionComponent } from './edit/edit-production.component'
import { ShowProductionComponent } from './show/show-production.component'
import { ProductionOverview } from './production/production-overview/production-overview.component'
import { TabsComponent } from './components/tab/tabs/tabs.component'
import { SingleTabComponent } from './components/tab/single-tab/single-tab.component'
import { MenuComponent } from './components/menu/menu.component'
import { DailyDeductionComponent } from './production/dailyDeduction/dailyDeduction.component'
import { AddDeductionComponent } from './add/add-deduction.component'
import '../assets/styles/styles.scss'

import { EmploymanPipe } from './employman/employman.component.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    AddProductionComponent,
    EditComponent,
    ShowComponent,
    EmploymanComponent,
    StandardTableComponent,
    DailyProductionComponent,
    EmploymanPipe,
    EditProductionComponent,
    ShowProductionComponent,
    ProductionOverview,
    TabsComponent,
    SingleTabComponent,
    MenuComponent,
    DailyDeductionComponent,
    AddDeductionComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NguiDatetimePickerModule,
    ReactiveFormsModule,
    TabsModule
  ],
  providers: [EmpService, DailyProductionService,DailyDeductionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
