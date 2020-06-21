import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
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
                        /* OJO: 
                        el endpoint de reqres, regresa el arreglo en campo data de result.*/
                        map( (result: any) => cargarUsuariosSuccess({ usuarios: result.data })),
                        catchError(error => of(cargarUsuariosError({ payload: error })))
                    )
                )
            )
    );
}