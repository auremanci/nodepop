import { Component, OnInit } from '@angular/core';
import { SidebarsService } from '../../services/sidebars.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  mainSidebar: boolean;

  constructor(private _sidebarsService: SidebarsService) { }

  ngOnInit() {
    this._sidebarsService.sendShowMainSidebar.subscribe(response => {
      this.mainSidebar = response;
    });
  }

  closeMainSidebar() {
    this._sidebarsService.visibleMainSidebar(false);
  }

}
