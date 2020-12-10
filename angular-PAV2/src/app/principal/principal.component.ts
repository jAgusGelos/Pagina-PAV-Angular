import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  mensaje:string;
  materia = "pav2";
  verMateria = true;

  constructor() { }

  ngOnInit() {
    this.mensaje = "Hola MUNDO ME QUIER PEGAR UN CORCHAZO CON INTERPOLACIÓN"
  }

}