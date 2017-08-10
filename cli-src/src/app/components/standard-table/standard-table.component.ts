import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmploymanPipe } from '../../employman/employman.component.pipe';
@Component({
    selector: 'standard-table',
    templateUrl: './standard-table.component.html',
    styleUrls:['./standard-table.component.scss']
})
export class StandardTableComponent {
    @Input() tableHeader: { key: string, value: string }[];
    @Input() tableContent: any[];
    @Input() filter: any;
    @Input() page: string;

    @Output() delete: EventEmitter<any> = new EventEmitter();
    handleDelete(entryId): void {
        this.delete.emit(entryId);
    }
}