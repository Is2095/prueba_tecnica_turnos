
import GetElementoAPI from "../../hook/getElementoAPI";
import GetHorariosAPI from "../../hook/getHorariosAPI";
import { useAppDispatch, useAppSelector } from "../../hook/hookStore";
import { sumarCategoria, Categoria } from "../slice/reservarSlice";
import { sumarSeleccionTurno, borrorSeleccion, sumarSeleccion, Turno } from "../slice/seleccionSlice";
import { sumarHorario } from "../slice/turnosSlice";
import { TurnosAgendados, sumarturno } from "../slice/agendaTurnosSlice";

export const useActions = () => {

    const dispatch = useAppDispatch();

    const elementos = useAppSelector(state => state.reservar);
    const horarios = useAppSelector(state => state.horario);
    const seleccion = useAppSelector(state => state.seleccion);
    const turnos = useAppSelector(state => state.turnos);

    const getDatos = () => {
        return elementos;
    };

    const getHorarios = () => {
        return horarios;
    };

    const getSeleccion = () => {
        return seleccion;
    };

    const getAgendaTurnos = () => {
        return turnos;
    };

    const sumarDatos = () => {
        const datos = GetElementoAPI();
        dispatch(sumarCategoria(datos));
    };

    const sumaSeleccion = (dato: Categoria) => {
        dispatch(sumarSeleccion(dato));
    };

    const sumarSeleccionHorario = (dato: Turno) => {
        dispatch(sumarSeleccionTurno(dato));
    };

    const sumarTurnoAgenda = (dato: TurnosAgendados) => {
        dispatch(sumarturno([dato]));
    };

    const borrarSeleccion = () => {
       const cero = {
            id: 0,
            name: '',
            description: '',
            category: '',
            turno: '',
            fecha: '',
        };
        dispatch(borrorSeleccion(cero));
    };

    const sumaHorarios = () => {
        const horario = GetHorariosAPI();
        dispatch(sumarHorario(horario));
    };

    return { sumarDatos, sumaSeleccion, sumaHorarios, sumarSeleccionHorario, sumarTurnoAgenda, borrarSeleccion, getDatos, getHorarios, getSeleccion, getAgendaTurnos };
};
