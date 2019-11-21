import { Component, OnInit } from '@angular/core';

import { ArticulosService } from '../../services/articulos.service';
import { SidebarsService } from '../../services/sidebars.service';

import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.scss']
})
export class ListaArticulosComponent implements OnInit {

  filtrosSidebar: boolean;
  articulos: any = [];
  articuloSeleccionado: any;
  displayDialog: boolean;
  listaOrdenar: SelectItem[];
  sortField: string;
  sortOrder: number;

  constructor(private articulosService: ArticulosService, private _sidebarsService: SidebarsService) { }

  ngOnInit() {

    this._sidebarsService.sendShowFiltrosSidebar.subscribe(response => {
      this.filtrosSidebar = response;
    });
    
    this.articulosService.getArticulos().then(res =>{ 
      this.articulos = res;
    });

    this.listaOrdenar = [
      {label:'Novedades', value:'art_creacion'},
      {label:'De más barato a más caro', value:'art_precio'},
      {label:'De más caro a más barato', value:'!art_precio'}
    ]; 

  }

  selectArticulo(event: Event, articulos: any) {
    this.articuloSeleccionado = articulos;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  onDialogHide() {
    this.articuloSeleccionado = null;
  }

  mostrarFiltrosSidebar() {
    this._sidebarsService.visibleFiltrosSidebar(true);
  }

}
