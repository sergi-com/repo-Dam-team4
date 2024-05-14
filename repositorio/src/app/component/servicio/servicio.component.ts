import { servicios } from './../../common/servicios';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent implements OnInit {
  bdservicio: any;
  constructor(
    private dataservice: DataService,
    private activatedRouted: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.loadservicioOne();
  }
  loadservicioOne(){
    const index = this.activatedRouted.snapshot.params['index'];
    this.dataservice.getServicio().subscribe(
      {
        next: (data)=>{
         this.bdservicio = data.nombre[index]
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
