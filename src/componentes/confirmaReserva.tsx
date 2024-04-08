 
import { useActions } from "../redux/actions/actions"
import style from './modulosCSS/confirmacion.module.css'

const ConfirmarReserva = () => {

    const {getSeleccion} = useActions()
    const seleccion = getSeleccion()    

    return (
        <div className={style.contenedorConfirmacio}>
           <h2 className={style.tituloServivio}> Servicio: <strong className={style.strongConfirmacion}> {seleccion.name} </strong> </h2>
           <h2 className={style.tituloFecha}>Fecha del turno: <strong className={style.strongConfirmacion}> {seleccion.fecha} </strong></h2>
           <h2 className={style.tituloFecha}>Hora: <strong className={style.strongConfirmacion}> {seleccion.turno}hs </strong> </h2>
        </div>
    )
}
export default ConfirmarReserva