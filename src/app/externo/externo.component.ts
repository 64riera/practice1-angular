import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { HolaService } from '../hola.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  private userId: any;
  private fecha: any;
  public newUser: any;

  constructor(
    private peticiones: PeticionesService
  ) {
    this.userId = 1;
    this.fecha = new Date( 2019, 5, 20 )
    this.newUser = {
      "name": 'hola',
      "job": 'jeje'
    }
   }

  ngOnInit() {
    this.getUserById();
    this.addUser();
  }

  getUserById(){

    this.user = false;

    this.peticiones.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addUser(){
    this.peticiones.addUser(this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
