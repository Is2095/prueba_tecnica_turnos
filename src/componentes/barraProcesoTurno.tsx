
import { useLocation } from "react-router-dom";
import style from './modulosCSS/barraProcesoTurno.module.css';
import { useEffect, useState } from "react";

const BarraProcessoTurno = () => {

    const [nivelBarra, setNivelBarra] = useState('30%');
    const [titulo, setTitulo] = useState('Seleccionar servicio');

    const location = useLocation();

    useEffect(() => {

        if (location.pathname === '/reservar') {
            setNivelBarra('30%');
            setTitulo('Seleccionar servicio');
        };
        if (location.pathname === '/turnos') {
            setNivelBarra('60%');
            setTitulo('Seleccionar horario');
        };
        if (location.pathname === '/confirmarReserva') {
            setNivelBarra('85%');
            setTitulo('Confirmar turno');
        };

    }, [location]);

    return (
        <div>
            {
                (location.pathname === '/turnos' || location.pathname === '/reservar' || location.pathname === '/confirmarReserva')
                    ?
                    (
                        <div>
                            <h4 className={style.cartelbarra}>{titulo}</h4>
                            <div className={style.contenedorBarra}>
                                <div className={style.barraProceso} style={{ width: `${nivelBarra}` }}></div>
                            </div>
                        </div>
                    ): 
                    (
                        <div className={style.cartelBarraVacio}>
                           <div className={style.BarraVacia}></div>
                        </div>
                    )
            }
        </div>
    )
}; 

export default BarraProcessoTurno;
