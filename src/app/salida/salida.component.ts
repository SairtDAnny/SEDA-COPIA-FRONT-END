import { Component, OnInit } from '@angular/core';
import { Salida } from './salida';
import { SalidaService } from './salida.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent {

  titulo:string="Listar de Salidas de EPP"
  
  salida:Salida[];


  constructor(private salidaService:SalidaService){}

  ngOnInit(): void {
      this.salidaService.getAll().subscribe(
        a => this.salida=a
      ); 
  }

  delete(salida:Salida):void{
    console.log("dsds");
    this.salidaService.delete(salida.idsalidaoficina).subscribe(
      res=>this.salidaService.getAll().subscribe(
        response=>this.salida=response 
      )
    );
  }

}

