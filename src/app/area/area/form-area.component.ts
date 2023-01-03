import { Component, OnInit } from '@angular/core';
import { Area } from '../area';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.css']
})
export class FormAreaComponent implements OnInit{

  area:Area=new Area();
  titulo:string="Registro de Nueva Oficina"; 

  constructor(private areaService:AreaService, private router:Router, private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
     this.cargar();
    }

    cargar():void{
      this.activateRoute.params.subscribe(
        e=>{
          let idArea=e['idArea'];
          if(idArea){
            this.areaService.get(idArea).subscribe(
              es=>this.area=es
            );
          }
        });
    }

    create():void{
      console.log(this.area);
      this.areaService.create(this.area).subscribe(
        res=>this.router.navigate(['/area'])
      );
    }

    update():void{
      this.areaService.update(this.area).subscribe(
        e=>this.router.navigate(['/area'])
      );
    }   
}
