import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { servicio, servicios } from '../common/servicios';



@Injectable({
  providedIn: 'root'
})
export class JSONServiceService {

  private url = "../../../Data/datos.json"

  constructor(private http:HttpClient) { }

  getServicio():Observable<servicio>{
    return this.http.get<servicio>(this.url)
  }
}
