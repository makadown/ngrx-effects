import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions';
import { createReducer, on } from '@ngrx/store';

export interface UsuariosState {
    users: [],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const featureReducer = createReducer(
    usuariosInitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true })),
    on(cargarUsuariosSuccess, (state, {usuarios}) => ({ 
        ...state,
        loading: false,
        loaded: true,
        users: [...usuarios]
    })),
    on(cargarUsuariosError, (state, {payload}) => ({ 
        ...state,
        loading: false,
        loaded: false,
        error: payload
    }))   
);

export function reducer(state, action) {
    return featureReducer(state, action);
}