import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ProductionOverview } from './production/production-overview/production-overview.component'


import { EmploymanComponent } from './employman/employman.component';
import { AddComponent } from './add/add-employee.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

import { DailyProductionComponent } from './production/dailyproduction/dailyproduction.component'
import { AddProductionComponent } from './add/add-production.component';
import { EditProductionComponent } from './edit/edit-production.component'
import { ShowProductionComponent } from './show/show-production.component'

import { DailyDeductionComponent } from './production/dailyDeduction/dailyDeduction.component'
import { EditDeductionComponent } from './edit/edit-deduction.component'
import { ShowDeductionComponent } from './show/show-deduction.component'
import { AddDeductionComponent } from './add/add-deduction.component'

import { DailyMendingComponent } from './production/dailymending/dailymending.component'
import { AddMendingComponent } from './add/add-mending.component'
import { EditMendingComponent } from './edit/edit-mending.component'
import { ShowMendingComponent } from './show/show-mending.component'

import { MonthlyMendingComponent } from './production/monthlymending/monthlymending.component'
import { AddMonthlyMendingComponent } from './add/add-monthlymending.component'
import { EditMonthlyMendingComponent } from './edit/edit-monthlymending.component'
import { ShowMonthlyMendingComponent } from './show/show-monthlymending.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmploymanComponent },
  {
    path: 'production-overview', component: ProductionOverview,
    children: [
      { path: '', redirectTo: 'dailyproduction', pathMatch: 'full' },
      { path: 'dailyproduction', component: DailyProductionComponent },
      { path: 'dailydeduction', component: DailyDeductionComponent },
      { path: 'dailymending', component: DailyMendingComponent },
    ]
  },
  { path: 'dailyproduction/add', component: AddProductionComponent },
  { path: 'dailyproduction/edit/:id', component: EditProductionComponent },
  { path: 'dailyproduction/show/:id', component: ShowProductionComponent },

  { path: 'dailydeduction/add', component: AddDeductionComponent },
  { path: 'dailydeduction/edit/:id', component: EditDeductionComponent },
  { path: 'dailydeduction/show/:id', component: ShowDeductionComponent },

  { path: 'dailymending/add', component: AddMendingComponent },
  { path: 'dailymending/edit/:id', component: EditMendingComponent },
  { path: 'dailymending/show/:id', component: ShowMendingComponent },

  { path: 'employee/add', component: AddComponent },
  { path: 'employee/edit/:id', component: EditComponent },
  { path: 'employee/show/:id', component: ShowComponent },

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
