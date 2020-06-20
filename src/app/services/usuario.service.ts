import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlReqRes = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.urlReqRes}/users?per_page=6`);
  }

  /**
   * Para obtener descripciones dummy
   */
  getLoremIpsum() {
    return this.http.get('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
  }
}
