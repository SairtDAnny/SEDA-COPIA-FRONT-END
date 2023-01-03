import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Colaborador } from './colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private url:string="http://localhost:8080/colaborador";
  private urllist:string="http://localhost:8080/colaborador/listColaborador";
  private urlcreate:string="http://localhost:8080/colaborador/insert";
  private urlupdate:string="http://localhost:8080/colaborador/update";
  private urldelete:string="http://localhost:8080/colaborador/delete";

constructor(private http:HttpClient) { }

//obtener estudiantes   
getAll():Observable<Colaborador[]>{
  return this.http.get<Colaborador[]>(this.urllist);
}
//crear
create(idcolaborador:Colaborador):Observable<Colaborador>{
  return this.http.post<Colaborador>(this.urlcreate, idcolaborador)
}
//obtner uno solo
get(idcolaborador:string):Observable<Colaborador>{
  return this.http.get<Colaborador>(this.url+'/'+idcolaborador);
}
//actualizar
update(idcolaborador:Colaborador):Observable<Colaborador>{
  return this.http.put<Colaborador>(this.urlupdate, idcolaborador);
}
//eliminar
delete(idcolaborador:string):Observable<Colaborador>{
  return this.http.delete<Colaborador>(this.urldelete+'/'+idcolaborador);
}

}
