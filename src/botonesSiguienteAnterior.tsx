
import { useEffect, useState } from 'react';
import { useAppSelector } from './hook/hookStore';
import { useNavigate, useLocation } from 'react-router-dom';
import { useActions } from './redux/actions/actions';
import { toast } from "sonner";
import style from './componentes/modulosCSS/botonesSiguienteAnterior.module.css';

const BotonesSiguienteAnterior = () => {

    const [estadoSiguiente, setEstadoSiguiente] = useState(false);
    const [estadoConfirmar, setEstadoConfirmar] = useState(false);

    const seleccion = useAppSelector(state => state.seleccion);

    const navigate = useNavigate();
    const location = useLocation();
    const { sumarTurnoAgenda, borrarSeleccion } = useActions();

    useEffect(() => {
        if (seleccion.id !== 0 && location.pathname === '/reservar') {
            setEstadoSiguiente(true);
        }
        else if (location.pathname === '/turnos' && seleccion.id !== 0 && seleccion.turno !== undefined) {
            setEstadoSiguiente(true);
        }
        else if (location.pathname === '/confirmarReserva' && seleccion.id !== 0 && seleccion.turno !== undefined) {
            setEstadoConfirmar(true);
        }
        else {
            setEstadoSiguiente(false);
        };
    }, [seleccion, location]);

    const botonSiguiente = () => {
        if (location.pathname === '/reservar' && estadoSiguiente) { navigate('/turnos') };
        if (location.pathname === '/turnos' && seleccion.turno !== undefined) { navigate('/confirmarReserva') };
        if (location.pathname === '/confirmarreserva' && estadoConfirmar) { setEstadoConfirmar(true) };
        if (location.pathname === '/agendaturnos') {
            setEstadoConfirmar(false);
            setEstadoSiguiente(false);
        };
        setEstadoSiguiente(false);
    };

    const botonConfirmación = () => {
        toast.success('Se confirmó exitosamente el turno');
        sumarTurnoAgenda(seleccion);
        setTimeout(() => {
            borrarSeleccion();
            navigate('/reservar');
        }, 500);
    };

    return (
        <div className={style.contenedorSiguienteAtras}>
            <div>
                {
                    location.pathname !== '/agendaturnos' && location.pathname !== '/' && location.pathname !== '/reservar' && <button className={style.botonSiquienteAtras} onClick={() => navigate(-1)}>Anterior</button>
                }
            </div>
            <div>
                {
                    (estadoConfirmar && (location.pathname === '/confirmarReserva'))
                        ? <button className={style.botonSiquienteAtras} onClick={botonConfirmación}>confirmar</button>
                        : <button className={style.botonSiquienteAtras} onClick={botonSiguiente} id='siguiente' style={{ visibility: estadoSiguiente ? 'visible' : 'hidden' }} >Siguiente</button>
                }
            </div>
        </div>
    )
};

export default BotonesSiguienteAnterior;
