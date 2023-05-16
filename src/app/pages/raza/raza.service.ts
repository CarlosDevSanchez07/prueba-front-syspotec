import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataInput } from 'src/app/type';

@Injectable({
  providedIn: 'root'
})
export class RazaService {
  client = 'http://localhost:4001'
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<dataInput[]>(`${this.client}/breed?page=0&limit=10`);
  }

  create(data: dataInput) {
    return this.http.post<dataInput>(`${this.client}/breed`, data);
  }

  update(id: string, data: dataInput) {
    return this.http.put<dataInput>(`${this.client}/breed/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.client}/breed/${id}`);
  }
}
