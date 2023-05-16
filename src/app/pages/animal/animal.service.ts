import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataInput } from 'src/app/type';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  client = 'http://localhost:4001';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<dataInput[]>(`${this.client}/animal?page=0&limit=10`);
  }

  create(data: dataInput) {
    return this.http.post<dataInput>(`${this.client}/animal`, data);
  }

  update(id: string, data: dataInput) {
    return this.http.put<dataInput>(`${this.client}/animal/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.client}/animal/${id}`);
  }
}
