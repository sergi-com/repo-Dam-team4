import { JSONServiceService } from './../../service/json-service.service';
import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { servicios } from '../../common/servicios';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  bdservicio! : servicios;

  constructor(private JSONServiceService : JSONServiceService){}

  ngOnInit(): void {
      this.loadservicio();
  }

  loadservicio(){
    this.JSONServiceService.getServicio().subscribe({
      next:(data) => {
        this.bdservicio = data;
      },
      error: err => {
        console.log("error")
      },
      complete:() => {
        console.log("completo");
      },
    })

  }



}
