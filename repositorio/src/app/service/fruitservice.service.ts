import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private apiUrl = 'https://www.fruityvice.com/api/fruit/all'

  constructor(private http: HttpClient) { }

  getAllFruits(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
