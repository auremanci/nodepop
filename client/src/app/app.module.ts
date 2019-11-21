// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { DataViewModule } from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';


// Componentes
import { AppComponent } from './app.component';

import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SendPassComponent } from './components/send-pass/send-pass.component';
import { DialogSessionComponent } from './components/dialog-session/dialog-session.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';

// Servicios
import { IndexService } from './services/index.service';
import { SidebarsService } from './services/sidebars.service';
import { FiltrosService } from './services/filtros.service';
import { ArticulosService } from './services/articulos.service';




@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FiltrosComponent,
    NavBarComponent,
    SidebarComponent,
    SendPassComponent,
    DialogSessionComponent,
    ListaArticulosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    DropdownModule,
    OverlayPanelModule,
    HttpClientModule,
    SidebarModule,
    InputTextModule,
    DialogModule,
    SliderModule,
    FormsModule,
    DataViewModule,
    PanelModule
  ],
  providers: [
    IndexService,
    SidebarsService,
    FiltrosService,
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
