import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';
import { Usuario } from '../../models/usuario.model';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
                ofType(cargarUsuarios),
                mergeMap( () => 
                    this.usuarioService.getUsers().pipe(
                        map( (users: Usuario[]) => cargarUsuariosSuccess({ usuarios: users })),
                        catchError(error => of(cargarUsuariosError({ payload: error })))
                    )
                )
            )
    );
}