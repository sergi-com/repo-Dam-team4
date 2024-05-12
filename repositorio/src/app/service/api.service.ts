import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from './api.model'; // Asegúrate de crear un modelo Fruit que coincida con la estructura de datos de la API

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private apiUrl = 'https://www.fruityvice.com/api/fruit/all';

  constructor(private http: HttpClient) { }

  getAllFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.apiUrl);
  }
}
