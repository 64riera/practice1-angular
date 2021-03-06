import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nombreUsuario: string;
  public identificado: boolean;

  constructor(
    private rutaActiva: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    this.rutaActiva.params.subscribe(datos => {
      this.nombreUsuario = datos.nombre;
    });
  }

  cerrarSesion(){
    this.identificado = false;
  }

  iniciarSesion(){
    this.identificado = true;
  }

}
