
import { useActions } from "../redux/actions/actions";
import style from '../componentes/modulosCSS/agendaTurnos.module.css';

const AgendaTurnos = () => {

    const { getAgendaTurnos } = useActions();
    const turnos = getAgendaTurnos();

    return (
        <div>
            <h1 className={style.tituloTurnosConfirmados}>Turnos confirmados</h1>
            {
                (turnos.length !== 0) ? (
                    turnos.map(ele => {
                        return (
                            <div className={style.contenedorAgendaTurnos} key={ele.id}>
                                <h2 className={style.tituloCategoriaAgenda}>
                                    Servicio: <strong className={style.strongAgenda}> {ele.category}</strong>
                                </h2>
                                <h2>Tratamiento: <strong className={style.strongAgenda}>{ele.name}</strong></h2>
                                <h2>Descripción: <strong className={style.strongAgenda}> {ele.description}</strong></h2>
                                <div className={style.contenedorFechaAgenda}>
                                    <h2 className={style.tituloTurno}>Turno:</h2>
                                <h2 className={style.fechaTurno}>Día: <strong className={style.strongAgenda}>{ele.fecha}</strong></h2>
                                <h2 className={style.fechaTurno}>Hora: <strong className={style.strongAgenda}>{ele.turno}</strong></h2> 
                                </div>
                               
                            </div>
                        )
                    })
                ) : (
                    <div className={style.noHayTurnos}>
                        <h1 className={style.tituloNoHay}>No hay turnos agendados</h1>
                    </div>
                )
            }
        </div>
    )
};

export default AgendaTurnos;
