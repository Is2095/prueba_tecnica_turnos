
import { Categoria } from "../redux/slice/reservarSlice"
import { useActions } from "../redux/actions/actions"
import { useEffect } from "react"
import style from './modulosCSS/modal.module.css'

const ModalCategoria = ({ datosM }: { datosM: Categoria[] }) => {

    const { sumaSeleccion, getSeleccion } = useActions()

    useEffect(() => {
        const seleccion = getSeleccion()
        if (seleccion.id !== 0) {
            const boton = document.getElementById(`${seleccion.id}`)
            if (boton) {
                boton.style.backgroundColor = "rgb(8, 8, 8, .8)"
                boton.style.color = 'white'
            }
        }
    }, [getSeleccion])

    return (

        <div className={style.contenedorModal}>
            <ul className={style.ulListaModal}>
                {
                    datosM?.map(ele => {
                        return (
                            <div key={ele.id} className={style.diferentesEleccionCategoria}>

                                <p className={style.nombreCategoria}>Nombre: <strong className={style.strong}>{ele.name}</strong></p>
                                <li className={style.nombreCategoria}>Descripción: <strong className={style.strong}>{ele.description}</strong></li>
                                <div className={style.ubicacionBotonSelecionarCategoria}>
                                    <button className={style.botonSeleccionarTipo} id={`${ele.id}`} name="seleccion" onClick={() => {
                                        sumaSeleccion(ele)
                                        const button = document.getElementsByName('seleccion')
                                        button.forEach(ele => {
                                            ele.style.backgroundColor = 'white'
                                            ele.style.color = 'black'
                                        })
                                    }
                                    }
                                    >Seleccionar</button>
                                </div>
                            </div>
                        )
                    })
                }
            </ul >
        </div >
    )
}
export default ModalCategoria