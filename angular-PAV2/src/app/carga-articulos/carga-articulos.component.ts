import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, FormGroup, FormsModule} from '@angular/forms'
import { ArticulosFamilias } from '../modelos/articulosfamilia-colection';

@Component({
  selector: 'app-carga-articulos',
  templateUrl: './carga-articulos.component.html',
  styleUrls: ['./carga-articulos.component.css']
})
export class CargaArticulosComponent implements OnInit {

  fg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.fg = this.fb.group({
      IdArticuloFamilia: [''],
      Nombre: ['']
    })
  }

  grabar(){
    ArticulosFamilias.push({IdArticuloFamilia: Number(this.fg.value.IdArticuloFamilia), Nombre: this.fg.value.Nombre
})

  }

}