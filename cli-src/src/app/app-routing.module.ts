import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { EmploymanComponent } from './employman/employman.component';
import { DailyProductionComponent } from './dailyproduction/dailyproduction.component'
import { AddComponent } from './add/add-employee.component';
import { AddProductionComponent } from './add/add-production.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmploymanComponent },
  { path: 'production', component: DailyProductionComponent },
  { path: 'production/add', component: AddProductionComponent },
  { path: 'employee/add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'show/:id', component: ShowComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
