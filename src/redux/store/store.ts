
import { configureStore } from "@reduxjs/toolkit";
import reservaReducer from "../slice/reservarSlice"
import seleccionReducer from '../slice/seleccionSlice'
import horarioReducer from '../slice/turnosSlice'
import turnosReducer from '../slice/agendaTurnosSlice'

export const store = configureStore({
    reducer: {
        reservar: reservaReducer,
        seleccion: seleccionReducer, 
        horario: horarioReducer,
        turnos: turnosReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch