import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { EmploymanComponent } from './employman/employman.component';
import { DailyProductionComponent } from './production/dailyproduction/dailyproduction.component'
import { AddComponent } from './add/add-employee.component';
import { AddProductionComponent } from './add/add-production.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { EditProductionComponent } from './edit/edit-production.component'
import { ShowProductionComponent } from './show/show-production.component'
import { ProductionOverview } from './production/production-overview/production-overview.component'
import { DailyDeductionComponent } from './production/dailyDeduction/dailyDeduction.component'
import { AddDeductionComponent } from './add/add-deduction.component'
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
    ]
  },
  { path: 'dailyproduction/add', component: AddProductionComponent },
  { path: 'dailyproduction/edit/:id', component: EditProductionComponent },
  { path: 'dailyproduction/show/:id', component: ShowProductionComponent },
  { path: 'dailydeduction/add', component: AddDeductionComponent },
  { path: 'dailydeduction/edit/:id', component: EditProductionComponent },
  { path: 'dailydeduction/show/:id', component: ShowProductionComponent },
  { path: 'employee/add', component: AddComponent },
  { path: 'employee/edit/:id', component: EditComponent },
  { path: 'employee/show/:id', component: ShowComponent },

];
// const aboutRoutes: Routes = [
//   {
//     path:'production-overview',
//     component:ProductionOverview,
//     children:[
//       {
//         path:'',
//         children:[{
//           path:'dailyproduction',
//           component:DailyProductionComponent
//         },{
//           path:'dailyproductionxx',
//           component:DailyProductionComponent
//         }]
//       }
//     ]
//   }
// ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    //RouterModule.forChild(aboutRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
