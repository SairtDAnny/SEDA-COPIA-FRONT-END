import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { Salida } from '../salida';
import { SalidaService } from '../salida.service';

@Component({
  selector: 'app-forms-salida',
  templateUrl: './forms-salida.component.html',
  styleUrls: ['./forms-salida.component.css']
})
export class FormsSalidaComponent {
  salida:Salida=new Salida();
  titulo:string="Registro de Nueva Salida EPP"; 

  constructor(private salidaService:SalidaService, private router:Router, private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
     this.cargar();
    }

    cargar():void{
      this.activateRoute.params.subscribe(
        e=>{
          let idsalidaoficina=e['idsalidaoficina'];
          if(idsalidaoficina){
            this.salidaService.get(idsalidaoficina).subscribe(
              es=>this.salida=es
            );
          }
        });
    }

    create():void{
      console.log(this.salida);
      this.salidaService.create(this.salida).subscribe(
        res=>this.router.navigate(['/salida'])
      );
    }

    update():void{
      this.salidaService.update(this.salida).subscribe(
        e=>this.router.navigate(['/salida'])
      );
    }   
}
