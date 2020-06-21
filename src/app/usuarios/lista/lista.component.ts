import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/reducers/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  observableIpsum = new Observable();
  constructor(private store: Store<AppState>) {

    this.store.select('usuarios').subscribe(({ users }) => {
      this.usuarios = [];
      console.log(users);
      if (users) {
        this.usuarios = users;
      }
    });

    this.store.dispatch(cargarUsuarios());
  }

  ngOnInit(): void {
  }

}
