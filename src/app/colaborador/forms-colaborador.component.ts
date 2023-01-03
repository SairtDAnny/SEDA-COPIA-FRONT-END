import { Component } from '@angular/core';

import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { Area } from '../area/area';
import { AreaService } from '../area/area.service';
import { Colaborador } from './colaborador';
import { ColaboradorService } from './colaborador.service';

@Component({
  selector: 'app-forms-colaborador',
  templateUrl: './forms-colaborador.component.html',
  styleUrls: ['./forms-colaborador.component.css']
})
export class FormsColaboradorComponent {
  colaborador:Colaborador=new Colaborador();
  area:Area=new Area();
  titulo:string="Registro de Nuevo Colaborador"; 
  areas: Area[];
  are: Area["descripcion"];
  

  constructor(private areaService:AreaService, private colaboradorService:ColaboradorService, private router:Router, private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
     this.cargar();
     this.oficina();
    }

    oficina():void{
      this.areaService.getAll().subscribe(
        a => this.areas=a,
        b => this.are=b    
      );
    }



    cargar():void{
      this.activateRoute.params.subscribe(
        e=>{
          let idcolaborador=e['idcolaborador'];
          if(idcolaborador){
            this.colaboradorService.get(idcolaborador).subscribe(
              es=>this.colaborador=es
            );
          }
        });
    }

    create():void{
      console.log(this.colaborador);
      this.colaboradorService.create(this.colaborador).subscribe(
        res=>this.router.navigate(['/colaborador'])
      );
    } 

    update():void{
      this.colaboradorService.update(this.colaborador).subscribe(
        e=>this.router.navigate(['/colaborador'])
      );
    }
    
}