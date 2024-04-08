
import { useEffect, useState } from "react";
import { useActions } from "../redux/actions/actions";
import { Horario } from "../redux/slice/turnosSlice";
import style from './modulosCSS/turnos.module.css';

const Turnos = () => {

    const [datos, setDatos] = useState<Horario>({
        serviceId: 0,
        date: '',
        availableTimeslots: []
    });

    const { getHorarios, getSeleccion, sumarSeleccionHorario } = useActions();

    useEffect(() => {
        const horariosParaRenderizar = getHorarios();
        const seleccion = getSeleccion();

        if (horariosParaRenderizar) setDatos(horariosParaRenderizar);

        if (seleccion.turno !== undefined) {
            horariosParaRenderizar.availableTimeslots.forEach((hora, index) => {
                if (hora === seleccion.turno) {
                    const boton = document.getElementById(`horario-${index}`);
                    if (boton) {
                        boton.style.backgroundColor = "rgb(8, 8, 8, .8)";
                        boton.style.color = 'white';
                    };
                };
            });
        }
        else {
            const button = document.getElementsByName('seleccion');
            button.forEach(ele => ele.style.backgroundColor = 'white');
        };
    }, [getSeleccion]);

    const handlerHorario = ({ ele }: { ele: string }) => {
        sumarSeleccionHorario({ turno: ele, fecha: datos.date });
        const button = document.getElementsByName('horarios');
        button.forEach(ele => {
            ele.style.backgroundColor = 'beige';
            ele.style.color = 'black';
        });
    };

    return (
        <div className={style.contenedorTurnos}>
            <p className={style.tituloTurnosDisponibles}>Próximos turnos disponibles</p>
            <p className={style.diaTurnosDisponibles}>Dia: <strong className={style.strongTurnos}>{datos.date}</strong> </p>
            <div className={style.contenedorHorarios}>
                {
                    datos.availableTimeslots?.map((ele, index) => {
                        return (
                            <button className={style.botonHorario} key={`horario-${index}`} id={`horario-${index}`} name="horarios" onClick={() => handlerHorario({ ele })}>
                                {ele}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Turnos;
