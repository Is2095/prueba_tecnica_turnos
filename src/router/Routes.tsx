
import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Turnos from '../componentes/turnos'
import Categorias from '../componentes/reservar'
import ConfirmarReserva from '../componentes/confirmaReserva'
import { Navigate } from 'react-router-dom'
import AgendaTurnos from '../componentes/agentaTurnos'

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [{
            path: '/reservar',
            element: <Categorias/>
        },
        {
            path: '/turnos',
            element: <Turnos/>
        },
        {
            path: '/ConfirmarReserva',
            element: <ConfirmarReserva/>
        },
        {
            path: '/AgendaTurnos',
            element: <AgendaTurnos/>
        },
        {
            path: '*',
            element: <Navigate to="/"/>
        }
    ]
   }
 ])
