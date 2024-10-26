import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = "jsonplaceholder.typicode.com/posts/"

  constructor( private http: HttpClient) { }

  public obtenerData(): Observable<any>{
    return this.http.get<any>(this.urlApi)
  }
}
