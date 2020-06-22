import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlReqRes = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.urlReqRes}/users?per_page=12&delay=3`)
      .pipe(
          map( resp => resp['data'])
      );
  }

  getUsersById(id: string) {
    return this.http.get(`${this.urlReqRes}/users/${ id }`)
      .pipe(
          map( resp => resp['data'])
      );
  }

  /**
   * Para obtener descripciones dummy
   */
  getLoremIpsum() {
    return this.http.get('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
  }
}
