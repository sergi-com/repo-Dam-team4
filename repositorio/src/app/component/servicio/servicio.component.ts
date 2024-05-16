import { Servicio, servicios } from './../../common/servicios';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent implements OnInit {
  bdservicio!: Servicio;
  bdata:any;
  constructor(
    private dataservice: DataService,
    private activatedRouted: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.loadheroeONe();
  }
  loadheroeONe(){
    const index = this.activatedRouted.snapshot.params['index'];
    this.dataservice.getSupeHeroe().subscribe(
      {
        next: (data)=>{
          this.bdata = data.servicios[index]
          console.log(data.servicios[index])
        },
        error: (err)=>{
          console.log(err)
        },
        complete:()=>{
          console.log('completed')
        }
      }
    )
  }

}
