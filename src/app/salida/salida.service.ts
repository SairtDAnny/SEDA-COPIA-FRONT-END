import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Salida } from './salida';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {

  private url:string="http://localhost:8080/salida";
  private urllist:string="http://localhost:8080/salida/listSalida";
  private urlcreate:string="http://localhost:8080/salida/insert";
  private urlupdate:string="http://localhost:8080/salida/update";
  private urldelete:string="http://localhost:8080/salida/delete";
  private urllistOf:string="http://localhost:8080/salida/oficinas";

  constructor(private http:HttpClient) { }

  //obtener estudiantes 
  getAll():Observable<Salida[]>{
    return this.http.get<Salida[]>(this.urllist);
  }
  //crear
  create(idsalidaoficina:Salida):Observable<Salida>{
    return this.http.post<Salida>(this.urlcreate, idsalidaoficina)
  }
  //obtner uno solo
  get(idsalidaoficina:string):Observable<Salida>{
    return this.http.get<Salida>(this.url+'/'+idsalidaoficina);
  }
  //actualizar
  update(idsalidaoficina:Salida):Observable<Salida>{
    return this.http.put<Salida>(this.urlupdate, idsalidaoficina);
  }
  //eliminar
  delete(idsalidaoficina:string):Observable<Salida>{
    return this.http.delete<Salida>(this.urldelete+'/'+idsalidaoficina);
  }
  //lista de nombres de area                    /*NOSE USA */
  /*getOficina():Observable<Salida[]>{
    return this.http.get<Salida[]>(this.urllistOf);
  }*/

}
