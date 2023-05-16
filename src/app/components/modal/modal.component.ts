import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dataInput, Status } from '../../type';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() title: String = "Crear animal";
  @Input() showSelect: Boolean = false;
  @Input() showModal: boolean = false;
  @Output() toggleModalEmitter = new EventEmitter();
  @Input() dataObject: dataInput = {
    description: '',
    breed: '',
    status: Status.ACTIVE,
  };
  @Output() handlerSubmit = new EventEmitter();
  @Input() breeds: dataInput[] = [];

  handlerSubmitEvent() {
    this.handlerSubmit.emit();
    this.toggleModal();
  }

  toggleModal() {
    this.toggleModalEmitter.emit();
  }
}
