import { Component, OnInit } from '@angular/core';

import { ArticulosService } from '../../services/articulos.service';

import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.scss']
})
export class ListaArticulosComponent implements OnInit {

  listaOrdenar: SelectItem[];
  ordenarPor: string;
  articulos: any = [];
  lazyArticulos: any[];
  timeout: any;

  constructor(private articulosService: ArticulosService) {
    this.listaOrdenar = [
        {label:'Novedades', value:'art_creacion DESC'},
        {label:'De más barato a más caro', value:'art_precio ASC'},
        {label:'De más caro a más barato', value:'art_precio DESC'}
    ]; 
  }

  ngOnInit() {
    this.loadArticulosLazy();
  }

  loadArticulosLazy() {

    this.articulosService.getArticulos().then(res =>{ 
      this.articulos = res;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    
      this.timeout = setTimeout(() => {
          this.lazyArticulos = [];
          if (this.articulos) {
              this.lazyArticulos = this.articulos.slice();
          }
      }, 1000);
      });
  }

}
