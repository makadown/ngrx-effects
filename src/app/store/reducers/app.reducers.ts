import { ActionReducerMap } from '@ngrx/store';
import { UsuariosState, usuariosReducer } from './usuarios.reducer';
import { InjectionToken } from '@angular/core';
import { UsuarioState, usuarioReducer } from './usuario.reducer';

export interface AppState {
    usuarios: UsuariosState,
    usuario: UsuarioState
}

export const appReducers = new InjectionToken<ActionReducerMap<AppState>>
    ('effects', {
        factory: () => ({
            usuarios: usuariosReducer,
            usuario: usuarioReducer
        })
    });
