import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  API_URI = 'http://localhost:3000/filtros';

  constructor(private http: HttpClient) { }

  getFiltros() {
    return this.http.get(this.API_URI);
  }
}
