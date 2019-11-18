import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { IndexService } from '../../services/index.service';
import { Categorias } from '../../models/categorias';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})


export class TopNavComponent {
  categorias: any =  [];
  categoriaSeleccionada: Categorias;

  constructor(private categoriasService: IndexService) {}

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriasService.getCategorias()
      .subscribe(
        res => {
          this.categorias = res;
        },
        err => console.error(err)
      );
  }

  showList(event: any) {
    console.log(event.value.ca_codigo);
  }

}
