import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dataInput } from 'src/app/type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() headers: String[] = [];
  @Input() data: dataInput[] = [];
  @Output() toggleModalUpdate = new EventEmitter();
  @Output() handlerSubmitDelete = new EventEmitter();

  handlerSubmitUpdateEvent(row: dataInput) {
    this.toggleModalUpdate.emit(row);
  }

  handlerSubmitDeleteEvent(id: any) {
    this.handlerSubmitDelete.emit(id);
  }
}
