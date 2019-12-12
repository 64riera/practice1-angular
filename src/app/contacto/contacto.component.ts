import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  private usuario: Usuario;

  constructor() { 
    this.usuario = new Usuario('', '');
  }

  ngOnInit() {
    console.log(this.usuario);
  }

  onSubmit(contactForm){
    console.log(this.usuario);
    contactForm.reset();
  }

}
