import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Entrada } from './entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private url:string="http://localhost:8080/entrada";
  private urllist:string="http://localhost:8080/entrada/listEntrada";
  private urlcreate:string="http://localhost:8080/entrada/insert";
  private urlupdate:string="http://localhost:8080/entrada/update";
  private urldelete:string="http://localhost:8080/entrada/delete";
  private urllistOf:string="http://localhost:8080/entrada/oficinas";/*Listar para el combo box*/ 

  constructor(private http:HttpClient) { }

  //obtener estudiantes 
  getAll():Observable<Entrada[]>{
    return this.http.get<Entrada[]>(this.urllist);
  }
  //crear
  create(identradaoficina:Entrada):Observable<Entrada>{
    return this.http.post<Entrada>(this.urlcreate, identradaoficina)
  }
  //obtner uno solo
  get(identradaoficina:string):Observable<Entrada>{
    return this.http.get<Entrada>(this.url+'/'+identradaoficina);
  }
  //actualizar
  update(identradaoficina:Entrada):Observable<Entrada>{
    return this.http.put<Entrada>(this.urlupdate, identradaoficina);
  }
  //eliminar
  delete(identradaoficina:string):Observable<Entrada>{
    return this.http.delete<Entrada>(this.urldelete+'/'+identradaoficina);
  }
  //lista de nombres de area                    /*NOSE USA */
 /* getOficina():Observable<Entrada[]>{
    return this.http.get<Entrada[]>(this.urllistOf);
  }*/

}
