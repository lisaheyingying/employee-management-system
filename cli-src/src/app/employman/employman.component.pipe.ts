import { Pipe, PipeTransform } from '@angular/core';
import { EmploymanComponent } from './employman.component';
import { Employee } from '../service/employee';
@Pipe({name: 'employmanFilter'})
export class EmploymanPipe implements PipeTransform{
    transform(allEmpolymen: Employee[], filter: any): Employee[]{
        if (allEmpolymen.length===0 || !filter){
          return allEmpolymen;
        }
        return allEmpolymen.filter(employee => employee.name.indexOf(filter)!==-1);
    }

}