import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private url:string="http://localhost:8080/area";
  private urllist:string="http://localhost:8080/area/listArea";
  private urlcreate:string="http://localhost:8080/area/insert";
  private urlupdate:string="http://localhost:8080/area/update";
  private urldelete:string="http://localhost:8080/area/delete";
  private urllistOf:string="http://localhost:8080/area/oficinas";

  constructor(private http:HttpClient) { }

  //obtener estudiantes 
  getAll():Observable<Area[]>{
    return this.http.get<Area[]>(this.urllist);
  }
  //crear
  create(idArea:Area):Observable<Area>{
    return this.http.post<Area>(this.urlcreate, idArea)
  }
  //obtner uno solo
  get(idArea:string):Observable<Area>{
    return this.http.get<Area>(this.url+'/'+idArea);
  }
  //actualizar
  update(idArea:Area):Observable<Area>{
    return this.http.put<Area>(this.urlupdate, idArea);
  }
  //eliminar
  delete(idArea:string):Observable<Area>{
    return this.http.delete<Area>(this.urldelete+'/'+idArea);
  }
  //lista de nombres de area                    /*NOSE USA */
  getOficina():Observable<Area[]>{
    return this.http.get<Area[]>(this.urllistOf);
  }

}
