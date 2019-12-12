import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService{

    private url: string;

    constructor(
        private httpClient: HttpClient
    ){
        this.url = 'https://reqres.in/';
    }

    getUser(idUser: any): Observable<any>{
        return this.httpClient.get(this.url+'api/users/' + idUser);
    }

}