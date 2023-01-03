import { Component,OnInit } from '@angular/core';
import { Entrada } from './entrada';
import { EntradaService } from './entrada.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {
  titulo:string="Listar de ingreso de EPP"
  
  entrada:Entrada[];


  constructor(private entradaService:EntradaService){}

  ngOnInit(): void {
      this.entradaService.getAll().subscribe(
        a => this.entrada=a
      ); 
  }

  delete(entrada:Entrada):void{
    console.log("dsds");
    this.entradaService.delete(entrada.identradaoficina).subscribe(
      res=>this.entradaService.getAll().subscribe(
        response=>this.entrada=response 
      )
    );
  }

}
