import { Component, OnInit } from '@angular/core';
import { Area } from './area';
import { AreaService } from './area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit{
  titulo:string="Listar de Oficinas"
  
  area:Area[];


  constructor(private areaService:AreaService){}

  ngOnInit(): void {
      this.areaService.getAll().subscribe(
        a => this.area=a
      ); 
  }

  delete(area:Area):void{
    console.log("dsds");
    this.areaService.delete(area.idArea).subscribe(
      res=>this.areaService.getAll().subscribe(
        response=>this.area=response 
      )
    );
  }

}
