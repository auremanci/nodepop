import { Component, OnInit } from '@angular/core';
import { SidebarsService } from '../../services/sidebars.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  mainSidebar: boolean;
  filtrosSidebar: boolean;

  constructor(private _sidebarsService: SidebarsService) {}

  ngOnInit() {
    this._sidebarsService.sendShowMainSidebar.subscribe(response => {
      this.mainSidebar = response;
    });

    this._sidebarsService.sendShowFiltrosSidebar.subscribe(response => {
      this.filtrosSidebar = response;
    });
  }

  mostrarMainSidebar() {
    this._sidebarsService.visibleMainSidebar(true);
  }

  mostrarFiltrosSidebar() {
    this._sidebarsService.visibleFiltrosSidebar(true);
  }
}
