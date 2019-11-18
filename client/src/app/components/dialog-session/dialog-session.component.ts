import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-session',
  templateUrl: './dialog-session.component.html',
  styleUrls: ['./dialog-session.component.scss']
})
export class DialogSessionComponent {

  @Input() visibleDialog: boolean;
  @Output() changeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() changeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  public visibleSidebar: boolean;

  closeSession() {
    this.changeDialog.emit(this.visibleDialog = false);
  }

  showSidebarCreateUser(){
    this.changeDialog.emit(this.visibleDialog = false);
    this.changeSidebar.emit(this.visibleSidebar = false);
  }
}
