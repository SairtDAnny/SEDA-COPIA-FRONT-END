import { Component } from '@angular/core';
import { Entrada } from './entrada';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { EntradaService } from './entrada.service';

@Component({
  selector: 'app-forms-entrada',
  templateUrl: './forms-entrada.component.html',
  styleUrls: ['./forms-entrada.component.css']
})
export class FormsEntradaComponent {
  entrada:Entrada=new Entrada();
  titulo:string="Registro de Nuevo Ingreso de EPP"; 

  constructor(private entradaService:EntradaService, private router:Router, private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
     this.cargar();
    }

    cargar():void{
      this.activateRoute.params.subscribe(
        e=>{
          let identradaoficina=e['identradaoficina'];
          if(identradaoficina){
            this.entradaService.get(identradaoficina).subscribe(
              es=>this.entrada=es
            );
          }
        });
    }

    create():void{
      console.log(this.entrada);
      this.entradaService.create(this.entrada).subscribe(
        res=>this.router.navigate(['/entrada'])
      );
    }

    update():void{
      this.entradaService.update(this.entrada).subscribe(
        e=>this.router.navigate(['/entrada'])
      );
    }   
}
