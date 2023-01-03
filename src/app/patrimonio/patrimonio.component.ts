import { Component, OnInit} from '@angular/core';
import { Patrimonio } from './patrimonio';
import { PatrimonioService } from './patrimonio.service';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.component.html',
  styleUrls: ['./patrimonio.component.css']
})
export class PatrimonioComponent implements OnInit{

  titulo:string="Listar de Patrimonios"

  patrimonio:Patrimonio[];

  constructor(private patrimonioService:PatrimonioService){}

  ngOnInit(): void {
      this.patrimonioService.getAll().subscribe(
        a => this.patrimonio=a
      );
  }
  delete(patrimonio:Patrimonio):void{
    console.log("dsds");
    this.patrimonioService.delete(patrimonio.idpatrimonio).subscribe(
      res=>this.patrimonioService.getAll().subscribe(
        response=>this.patrimonio=response
      )
    );
  }
}
