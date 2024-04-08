
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// export type CategoriaID = string

export interface Turno {
    turno: string;
    fecha: string;
}
export interface Categoria {
    id: number;
    name: string;
    description: string;
    category: string
    turno?: string
    fecha?: string
}

const initialState: Categoria = {
    id: 0,
    name: '',
    description: '',
    category: '',
    turno: '',
    fecha: '',
}

export const seleccionSlice = createSlice({
    name: 'seleccion',
    initialState,
    reducers: {
        sumarSeleccion: (state, action: PayloadAction<Categoria>) => {
            return state = action.payload
        },
        sumarSeleccionTurno: (state, action: PayloadAction<Turno>) => {
            return state = {...state, turno: action.payload.turno, fecha: action.payload.fecha}
        },
        borrorSeleccion: (state, action: PayloadAction<Categoria>) => {
            return state = action.payload
        }
    }
})
export default seleccionSlice.reducer;
export const { sumarSeleccion, sumarSeleccionTurno, borrorSeleccion } = seleccionSlice.actions
