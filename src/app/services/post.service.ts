import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

getAll (data): Observable<any> {
  return this.http.post('http://201.131.20.74:8080/workingmons-ws/insumos/consultaAll', {usuario_id:3})
  }
}
