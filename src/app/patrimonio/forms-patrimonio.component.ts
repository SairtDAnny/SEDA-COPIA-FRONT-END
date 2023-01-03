import { Component, OnInit} from '@angular/core'; 

import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { Patrimonio } from './patrimonio';
import { PatrimonioService } from './patrimonio.service';

@Component({
  selector: 'app-forms-patrimonio',
  templateUrl: './forms-patrimonio.component.html',
  styleUrls: ['./forms-patrimonio.component.css']
})
export class FormsPatrimonioComponent implements OnInit{
patrimonio:Patrimonio=new Patrimonio();
  titulo:string="Registro de Nueva Oficina"; 

  constructor(private patrimonioService:PatrimonioService, private router:Router, private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
     this.cargar();
    }

    cargar():void{
      this.activateRoute.params.subscribe(
        e=>{
          let idpatrimonio=e['idpatrimonio'];
          if(idpatrimonio){
            this.patrimonioService.get(idpatrimonio).subscribe(
              es=>this.patrimonio=es
            );
          }
        });
    }

    create():void{
      console.log(this.patrimonio);
      this.patrimonioService.create(this.patrimonio).subscribe(
        res=>this.router.navigate(['/patrimonio'])
      );
    }

    update():void{
      this.patrimonioService.update(this.patrimonio).subscribe(
        e=>this.router.navigate(['/patrimonio'])
      );
    }
    
}
