import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../service/fruitservice.service';
import { Fruits } from '../../common/fruits_interface';

@Component({
  selector: 'app-fruits',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  fruits!: Fruits;

  constructor(private Fruit : FruitService) { }

  ngOnInit(): void {
    this.getFruits();
  }

  getFruits(): void {
    this.Fruit.getAllFruits().subscribe(
        {
          next: (data)=>{
            this.fruits = data
            console.log(data)
          },
          error: (err)=>{
            console.log(err)
          },
          complete: ()=>{
            console.log('comp')
          },
        }
      )
  }
}
