import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Patrimonio } from './patrimonio';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  private url:string="http://localhost:8080/patrimonio";
  private urllist:string="http://localhost:8080/patrimonio/listPatrimonio";
  private urlcreate:string="http://localhost:8080/patrimonio/insert";
  private urlupdate:string="http://localhost:8080/patrimonio/update";
  private urldelete:string="http://localhost:8080/patrimonio/delete";

constructor(private http:HttpClient) { }

//obtener estudiantes 
getAll():Observable<Patrimonio[]>{
  return this.http.get<Patrimonio[]>(this.urllist);
}
//crear
create(idpatrimonio:Patrimonio):Observable<Patrimonio>{
  return this.http.post<Patrimonio>(this.urlcreate, idpatrimonio)
}
//obtner uno solo
get(idpatrimonio:string):Observable<Patrimonio>{
  return this.http.get<Patrimonio>(this.url+'/'+idpatrimonio);
}
//actualizar
update(idpatrimonio:Patrimonio):Observable<Patrimonio>{
  return this.http.put<Patrimonio>(this.urlupdate, idpatrimonio);
}
//eliminar
delete(idpatrimonio:string):Observable<Patrimonio>{
  return this.http.delete<Patrimonio>(this.urldelete+'/'+idpatrimonio);
}

}
