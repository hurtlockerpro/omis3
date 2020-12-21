import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbTodos } from './db-todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://jsonplaceholder.typicode.com/todos";
  limitNumber:number = 10;
  limitUrl:string = '?_limit=' + this.limitNumber;

  constructor(private httpApi:HttpClient) { }

  getTodos():Observable<DbTodos[]>{
    return this.httpApi.get<DbTodos[]>(this.url + this.limitUrl);
  }
}
