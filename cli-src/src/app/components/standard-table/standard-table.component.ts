import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'standard-table',
    templateUrl: './standard-table.component.html',
})
export class StandardTableComponent {
    @Input() tableHeader: { key: string, value: string }[];
    @Input() tableContent: any[];
  
    @Output() delete : EventEmitter<any> = new EventEmitter();
    handleDelete(entryId): void{
      this.delete.emit(entryId);
    }
}