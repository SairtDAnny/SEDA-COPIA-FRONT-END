import { Component, OnInit} from '@angular/core';
import { Colaborador } from './colaborador';
import { ColaboradorService } from './colaborador.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit{

  titulo:string="Listar de Colaboradores"

  colaborador:Colaborador[];

  constructor(private colaboradorService:ColaboradorService){}

  ngOnInit(): void {
      this.colaboradorService.getAll().subscribe(
        a => this.colaborador=a
      );
  }
  delete(colaborador:Colaborador):void{
    console.log("dsds");
    this.colaboradorService.delete(colaborador.idcolaborador).subscribe(
      res=>this.colaboradorService.getAll().subscribe(
        response=>this.colaborador=response
      )
    );
  }
}

 