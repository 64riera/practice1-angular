import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {

  public frutas: any[] = [];
  public nombre: string = null;
  public cantidad: number = null;

  constructor() { }

  ngOnInit() {
  }

  agregarFruta(){
    if( !this.nombre || !this.cantidad ){
      alert('Ingrese datos válidos para continuar');
      return 
    } else {
      this.frutas.push(
        { nombre: this.nombre, cantidad: this.cantidad }
      );
      this.nombre = null;
      this.cantidad = null;
    }
  }

  eliminarFruta(i: number){
    this.frutas.splice(i, 1);
  }

}
