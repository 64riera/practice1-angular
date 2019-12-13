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

    addUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this.httpClient.post(this.url + 'api/users', params);
    }

}