import { ActionReducerMap } from '@ngrx/store';
import { UsuariosState, usuariosReducer } from './usuarios.reducer';
import { InjectionToken } from '@angular/core';

export interface AppState {
    usuarios: UsuariosState
}

export const appReducers = new InjectionToken<ActionReducerMap<AppState>>
    ('effects', {
        factory: () => ({
            usuarios: usuariosReducer
        })
    });
