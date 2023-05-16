import { Component } from '@angular/core';
import { Status, dataInput } from 'src/app/type';
import { RazaService } from './raza.service';

@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.css'],
})
export class RazaComponent {
  constructor(private razaService: RazaService) {}

  breeds: dataInput[] = [];

  headerTable = ['ID', 'Descripción', 'Estado', 'Fecha creación', 'Acciones'];
  showModal = false;
  title = 'Crear raza';
  data: dataInput = {
    description: '',
    status: Status.ACTIVE,
  };
  updateId: string = '';

  getAllBreeds() {
    this.razaService.getAll().subscribe((data) => {
      this.breeds = data;
    });
  }

  ngOnInit() {
    this.getAllBreeds();
  }

  handlerSubmit() {
    if(this.updateId){
      this.razaService.update(this.updateId, this.data).subscribe({
        next: (data) => {
          this.data = {
            description: '',
            status: Status.ACTIVE,
          };
          this.getAllBreeds();
        },
        error: (error) => {
          console.log(error);
        },
      })
    }else{
      this.razaService.create(this.data).subscribe({
        next: (data) => {
          this.data = {
            description: '',
            status: Status.ACTIVE,
          };
          this.getAllBreeds();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  handlerSubmitDelete(id: string) {
    this.razaService.delete(id).subscribe({
      next: (data) => {
        this.getAllBreeds();
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  toggleModalUpdate(row: dataInput) {
    this.title = 'Actualizar raza';
    this.updateId = row._id || '';
    this.data = {
      description: row.description,
      status: row.status,
    };
    this.toggleModal();
  }
}
