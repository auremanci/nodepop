import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarsService {

  mainSidebar: boolean;
  private showMainSidebar = new Subject<boolean>();
  sendShowMainSidebar = this.showMainSidebar.asObservable();

  filtrosSidebar: boolean;
  private showFiltrosSidebar = new Subject<boolean>();
  sendShowFiltrosSidebar = this.showFiltrosSidebar.asObservable();

  visibleMainSidebar(mainSidebar: boolean){
    this.mainSidebar = mainSidebar;
    this.showMainSidebar.next(mainSidebar);
  }

  visibleFiltrosSidebar(filtrosSidebar: boolean) {
    this.filtrosSidebar = filtrosSidebar;
    this.showFiltrosSidebar.next(filtrosSidebar);
  }
}
