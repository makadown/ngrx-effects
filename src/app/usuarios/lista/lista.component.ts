import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  observableIpsum = new Observable();
  constructor(public usuarioService: UsuarioService) {

    this.observableIpsum = this.usuarioService.getLoremIpsum()
      .pipe(map((resp) => {
        // console.log(resp);
        return resp[0];
      }));
  }

  ngOnInit(): void {
    this.usuarioService.getUsers().pipe(
      map((resp: any) => resp.data)
    ).subscribe((data: any[]) => {
      this.usuarios = data;
    });
  } 

}
