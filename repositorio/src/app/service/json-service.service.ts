import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { servicios } from '../common/servicios';

@Injectable({
  providedIn: 'root'
})
export class JSONServiceService {

  constructor(private http:HttpClient) { }

  getServicios():Observable<servicios>{
    return this.http.get<servicios>('./assets/data/datos.json')
  }

  getServicio():Observable<servicios>{
    return this.http.get<servicios>('./assets/data/datos.json')
  }
}
