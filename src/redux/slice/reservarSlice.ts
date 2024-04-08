
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Categoria {
    id: number;
    name: string;
    description: string;
    category: string
};

const initialState: Categoria[] = [];

export const reservaSlice = createSlice({
    name: 'categoria',
    initialState,
    reducers: {
        sumarCategoria: (state, action: PayloadAction<Categoria[]>) => {
            return state = [...state, ...action.payload]
        }
    }
});

export default reservaSlice.reducer;
export const { sumarCategoria } = reservaSlice.actions;
