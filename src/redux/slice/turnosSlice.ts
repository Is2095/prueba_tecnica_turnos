
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Horario {
    serviceId: number;
    date: string;
    availableTimeslots: string[];
};

const initialState: Horario = {
    serviceId: 0,
    date: '',
    availableTimeslots: []
};

export const horarioSlice = createSlice({
    name: 'horario',
    initialState,
    reducers: {
        sumarHorario: (state, action: PayloadAction<Horario>) => {            
            return state = action.payload
        }
    }
});

export default horarioSlice.reducer;
export const { sumarHorario } = horarioSlice.actions;
