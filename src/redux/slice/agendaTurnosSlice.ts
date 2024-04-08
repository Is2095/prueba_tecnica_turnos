
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface TurnosAgendados {
    id: number;
    name: string;
    description: string;
    category: string
    turno?: string
    fecha?: string
};

const initialState: TurnosAgendados[] = [];

export const agendaTurnosSlice = createSlice({
    name: 'agendaTurnos',
    initialState,
    reducers: {
        sumarturno: (state, action: PayloadAction<TurnosAgendados[]>) => {
            return state = [...state, ...action.payload]
        }
    }
});

export default agendaTurnosSlice.reducer;
export const { sumarturno } = agendaTurnosSlice.actions;
