
import { useEffect, useState } from "react"
import { useActions } from "../redux/actions/actions"
import { Categoria } from "../redux/slice/reservarSlice"
import Cartas from "./cartas"
import style from './modulosCSS/reservar.module.css'

const Reservar = () => {

    const [datos, setDatos] = useState<Categoria[]>([])
    const [categoria, setCategoria] = useState<string[]>([])

    const { getDatos } = useActions()

    useEffect(() => {
        setDatos(getDatos())
        datos.forEach(el => {
            if (!categoria.includes(el.category)) {
                setCategoria([...categoria, el.category]);
            }
        });
    })

    return (
        <div className={style.contenedorReservas}>
            <p className={style.cartelCategoria}>Categorías</p>
            <ul className={style.ulListaReservar}>
                {
                    categoria?.map((ele) => {
                        return (
                            <div key={ele} className={style.tiposCategoria}>
                                <Cartas data={ele} datos = {datos} />
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Reservar