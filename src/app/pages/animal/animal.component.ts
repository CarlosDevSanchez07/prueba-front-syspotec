import { Component } from '@angular/core';
import { dataInput, Status } from 'src/app/type';
import { AnimalService } from './animal.service';
import { RazaService } from '../raza/raza.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent {
  constructor(
    private animalService: AnimalService,
    private breedService: RazaService
  ) {}
  animals: dataInput[] = [];
  breeds: dataInput[] = [];
  headerTable: String[] = [
    'ID',
    'Descripción',
    'Estado',
    'Raza',
    'Fecha creación',
    'Acciones',
  ];
  showModal: boolean = false;
  title: String = 'Crear animal';
  data: dataInput = {
    description: '',
    breed: '',
    status: Status.ACTIVE,
  };
  showSelect: boolean = true;
  updateId: string = '';

  getAllBreeds() {
    this.breedService.getAll().subscribe((data) => {
      this.breeds = data;
    });
  }

  getAllAnimals() {
    this.animalService.getAll().subscribe((data) => {
      this.animals = data;
    });
  }

  ngOnInit() {
    this.getAllBreeds();
    this.getAllAnimals();
  }

  handlerSubmit() {
    if(this.updateId){
      this.animalService.update(this.updateId, this.data).subscribe({
        next: (data) => {
          this.data = {
            description: '',
            breed: '',
            status: Status.ACTIVE,
          };
          this.getAllAnimals();
        },
        error: (error) => {
          console.log(error);
        },
      })
    }else{
      this.animalService.create(this.data).subscribe({
        next: (data) => {
          this.data = {
            description: '',
            breed: '',
            status: Status.ACTIVE,
          };
          this.getAllAnimals();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  handlerSubmitDelete(id: string) {
    this.animalService.delete(id).subscribe({
      next: (data) => {
        this.getAllAnimals();
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
    this.title = 'Actualizar animal';
    this.updateId = row._id || '';
    this.data = {
      description: row.description,
      breed: row.breed._id,
      status: row.status,
    };
    this.toggleModal();
  }
}
