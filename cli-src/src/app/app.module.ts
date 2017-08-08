import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

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
import { DailyProductionComponent } from './dailyproduction/dailyproduction.component';
import { DailyProductionService } from './service/dailyproduction.service';
import { EditProductionComponent } from './edit/edit-production.component'

import { EmploymanPipe } from './employman/employman.component.pipe';

import "../assets/styles/style.scss"

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
    EditProductionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NguiDatetimePickerModule,
    ReactiveFormsModule
  ],
  providers: [EmpService, DailyProductionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
