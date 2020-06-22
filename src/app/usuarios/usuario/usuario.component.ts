import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/app.reducers';
import { cargarUsuario } from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  faSpin = faSync;
  usuario: Usuario;
  loading = false;
  error: any;

  constructor(private router: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe(({ user, error, loading }) => {

      this.usuario = user;

      this.loading = loading;
      this.error = error;
    });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }));
    });
  }

}
