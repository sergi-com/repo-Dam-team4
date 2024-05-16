import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../service/fruitservice.service';
import { Fruits } from '../../common/api.model';

@Component({
  selector: 'app-fruits',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  fruits: any;

  constructor(private Fruit : FruitService) { }

  ngOnInit(): void {
    this.getFruits();
  }

  getFruits(): void {
    this.Fruit.getAllFruits().subscribe(
        {
          next: (data)=>{
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
