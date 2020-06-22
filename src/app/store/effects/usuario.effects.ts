import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';
import { Usuario } from '../../models/usuario.model';

@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) { }

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuario),
            mergeMap(({ id }) =>
                this.usuarioService.getUsersById(id).pipe(
                    map((user: Usuario) => cargarUsuarioSuccess({ usuario: user })),
                    catchError(error => of(cargarUsuarioError({ payload: error })))
                )
            )
        )
    );
}