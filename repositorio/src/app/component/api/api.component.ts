
import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../service/api.model';
import { FruitService } from '../../service/api.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  fruits: Fruit[] = [];

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getAllFruits()
      .subscribe(fruits => this.fruits = fruits);
  }
}
