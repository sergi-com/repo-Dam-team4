import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {


  constructor(private http: HttpClient) { }

  getAllFruits(): Observable<any> {
    return this.http.get<any>('./assets/data/api.json');
  }
}
