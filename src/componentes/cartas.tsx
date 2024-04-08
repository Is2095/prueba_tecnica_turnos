
import { useState } from "react"
import ModalCategoria from "./modal";
import { Categoria } from "../redux/slice/reservarSlice"
import style from './modulosCSS/cartas.module.css'



const Cartas = ({ data, datos }: { data: string, datos: Categoria[]}) => {
    const [estadoModal, setEstadoModal] = useState(false)
    const [datosModal, setDatosModal] = useState<Categoria[]>([])

    const handlerDatosModal = () => { 
    
        const datosTotales = datos.filter(item => item.category === data)
        setDatosModal(datosTotales)
        setEstadoModal(!estadoModal)
    }
    const handlerDatosModalDelete = () => {
        setDatosModal([])
        setEstadoModal(!estadoModal)
    }

    return (
        <div className={style.contenedorCartaDatos}>
            <div className={style.datos}>
                <h2> {data}</h2>
                {
                    estadoModal ? (<button className={style.botonModal} onClick={handlerDatosModalDelete}>-</button>) : (<button className={style.botonModal} onClick={handlerDatosModal}>+</button>)
                }
                
            </div>
            <div>

                {
                    estadoModal && (
                        <ModalCategoria datosM = {datosModal} />
                    )
                }
            </div>
        </div>


    )
}
export default Cartas
