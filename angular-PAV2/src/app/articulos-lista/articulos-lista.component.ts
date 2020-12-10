import { Component, OnInit } from '@angular/core';
import {ArticulosFamilia} from '../modelos/articulofamilia'
import {ArticulosFamilias} from '../modelos/articulosfamilia-colection'

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {
  listaArticulos: ArticulosFamilia[];
  verGrilla = false;
  mensajebtn = 'Mostrar Grilla'
  id:string;

  constructor() { }

  ngOnInit() {
    this.listaArticulos = ArticulosFamilias;
    this.id = this.route.snapshot.paramMap.get("idArticulo")
 

  }

  MostrarGrilla(){
    this.mensajebtn = this.verGrilla? 'Mostrar Grilla': 'Ocultar';
   this.verGrilla = !this.verGrilla;
   

  }

}