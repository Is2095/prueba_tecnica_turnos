
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useActions } from '../redux/actions/actions';
import { FcKindle } from "react-icons/fc";
import { FiCoffee } from "react-icons/fi";
import style from './modulosCSS/home.module.css';

const Home = () => {

    const { sumarDatos, sumaHorarios, getDatos } = useActions();
    const location = useLocation();
    const navigate = useNavigate();

    const programarTurno = () => {
        const datosState = getDatos();
        if (datosState.length === 0) {
            sumarDatos();
            sumaHorarios();
        };
        navigate('/reservar');
    };

    return (

        <div className={style.botonProgramarTurno}>
            {
                (location.pathname === '/')
                    ?
                    (
                        <div className={style.deseaProgramarTurno}>
                            <button className={style.botonIngresar} onClick={programarTurno}>
                                <FcKindle size={'6rem'} />
                            </button>
                            <h4 className={style.tituloIngresar}>Desea programar un turno?</h4>
                        </div>
                    ) :
                    (<div className={style.contenedorbotonesRT}>
                        <div className={style.botonReservar}>
                            <FiCoffee />
                            <NavLink
                                to={'/reservar'}
                                style={({ isActive }) => (
                                    isActive
                                        ? {
                                            textDecoration: 'underline',
                                            color: 'blue'
                                        }
                                        : {
                                            textDecoration: 'none',
                                            color: 'black'
                                        }
                                )}
                            >
                                Reservar
                            </NavLink>
                        </div>
                        <div className={style.botonTurnos}>
                            <FiCoffee />
                            <NavLink
                                to={'/agendaturnos'}
                                style={({ isActive }) => (
                                    isActive
                                        ? {
                                            textDecoration: 'underline',
                                            color: 'blue'
                                        }
                                        : {
                                            textDecoration: 'none',
                                            color: 'black'
                                        }
                                )}
                            >
                                Mis Turnos
                            </NavLink>
                        </div>
                    </div>)
            }
        </div>
    )
};

export default Home;
