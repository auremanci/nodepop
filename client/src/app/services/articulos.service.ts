import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Articulos } from '../models/articulos';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  API_URI = 'http://localhost:3000/articulos';

  constructor(private http: HttpClient) { }

  getArticulos() {
    return this.http.get(this.API_URI)
    .toPromise()
    .then(res => <Articulos[]> res)
    .then(data => { return data; });
  }
}