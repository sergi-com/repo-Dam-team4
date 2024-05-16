import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../common/servicios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getServicios(): Observable<Servicio>{
    return this.http.get<Servicio>('/assets/data/datos.json');
  }
  getSupeHeroe():Observable<any>{
    return this.http.get<any>('/assets/data/datos.json');
  }
}
