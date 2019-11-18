import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { SidebarsService } from '../../services/sidebars.service';
import { FiltrosService } from '../../services/filtros.service';

import { Categorias } from '../../models/categorias';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  filtrosSidebar: boolean;
  categoria: Categorias;
  modeloCategorias: Categorias[];
  rangoPrecios: number[] = [];
  precioMAX: number;
  precioMIN: number;
  res: any;
  fechaFiltro: string = '';
  @ViewChild('busqueda', {static: true}) filtroBusqueda: ElementRef;
  @ViewChild('listaCategoria', {static: true}) listaCategoria: ElementRef;
  @ViewChild('fecha24horas', {static: true}) filtroFecha24horas: ElementRef;
  @ViewChild('fecha7dias', {static: true}) filtroFecha7dias: ElementRef;
  @ViewChild('fecha30dias', {static: true}) filtroFecha30dias: ElementRef;

  constructor(private sidebarsService: SidebarsService, private filtrosService: FiltrosService) { }

  ngOnInit() {
    this.sidebarsService.sendShowFiltrosSidebar.subscribe(response => {
      this.filtrosSidebar = response;
    });
    this.filtrosService.getFiltros().subscribe(
      res => {
        this.res = res;
        this.modeloCategorias = this.res.listaCategorias;
        // tslint:disable-next-line: radix
        this.rangoPrecios = [parseInt(this.res.listaRangos[0].precioMIN), parseInt(this.res.listaRangos[0].precioMAX)];
        // tslint:disable-next-line: radix
        this.precioMAX = parseInt(this.res.listaRangos[0].precioMAX);
        // tslint:disable-next-line: radix
        this.precioMIN = parseInt(this.res.listaRangos[0].precioMIN);
      },
      err => console.error(err)
    );
  }

  reiniciarFiltros(){
    this.filtroBusqueda.nativeElement.value = "";
    this.categoria = null;
    this.rangoPrecios = [parseInt(this.res.listaRangos[0].precioMIN), parseInt(this.res.listaRangos[0].precioMAX)];
    this.fechaFiltro = '';
  }

  aplicarFiltros(){
    console.log(this.filtroBusqueda.nativeElement.value);
    if(this.categoria){
      console.log(this.categoria.ca_codigo);
    }else{
      console.log('Indefinido');
    }
    console.log(this.rangoPrecios[0]);
    console.log(this.rangoPrecios[1]);
    console.log(this.filtroFecha24horas.nativeElement.classList.contains('text-success'));
    console.log(this.filtroFecha7dias.nativeElement.classList.contains('text-success'));
    console.log(this.filtroFecha30dias.nativeElement.classList.contains('text-success'));
  }

  closeFiltrosSidebar() {
    this.sidebarsService.visibleFiltrosSidebar(false);
  }
}
