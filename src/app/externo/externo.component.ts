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

  constructor(
    private peticiones: PeticionesService
  ) {
    this.userId = 1;
    this.fecha = new Date( 2019, 5, 20 )
   }

  ngOnInit() {
    this.getUserById();
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

}
