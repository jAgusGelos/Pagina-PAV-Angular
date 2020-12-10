import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HelloComponent } from './hello.component';
import { MeunComponent } from './meun/meun.component';
import { PrincipalComponent } from './principal/principal.component';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';
import { CargaArticulosComponent } from './carga-articulos/carga-articulos.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  imports:      [ ReactiveFormsModule, BrowserModule, FormsModule ,
  RouterModule.forRoot([{path: 'lista-articulos/:id',component: ArticulosListaComponent},{path: 'lista-articulos',component: ArticulosListaComponent},{path:'cargaarticulos', component: CargaArticulosComponent},{path:'arts', component: ArticulosListaComponent} ])],
  declarations: [  HelloComponent, MeunComponent, PrincipalComponent, ArticulosListaComponent, CargaArticulosComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
