import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environmentProd} from '../../../../environment/environment.dev';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl:string=environmentProd.baseUrl;

  constructor(private httpClient:HttpClient) {
  }

  create(endPoint: string, data:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/${endPoint}`, data)
  }

  createById(endPoint: string, data: any, item: any): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/${endPoint}/${item}`, data);
  }


  getOne(endPoint: string, id: string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${endPoint}/${id}`)
  }

  getAll(endPoint: string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${endPoint}`)
  }

  delete(endPoint:string, id:string):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${endPoint}/${id}`)
  }
  update(endPoint: string, data: any, id: string):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/${endPoint}/${id}`, data)
  }

  getOneBySlug(endPoint: string, slug: string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${endPoint}/${slug}`)
  }

  connexion(endPoint: string,data: any): Observable<any>{
    return this.httpClient.post('${this.baseUrl}/${endPoint}',data)
  }

}
