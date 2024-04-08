
import './App.css';
import { Outlet } from 'react-router-dom';
import Home from './componentes/home';
import BotonesSiguienteAnterior from './botonesSiguienteAnterior';
import BarraProcessoTurno from './componentes/barraProcesoTurno';
import { Toaster } from "sonner"
import { useEffect } from 'react';
import { useActions } from './redux/actions/actions';
import { useNavigate } from 'react-router-dom';


function App() {
  const { getSeleccion } = useActions()
  const navigate = useNavigate()
  useEffect(() => {
    const seleccion = getSeleccion()
    if (seleccion.id === 0) navigate('/')
  }, [])

  return (
    <div className='pantallaInicial'>
      <BarraProcessoTurno />
      <div className='contenedorRutas'>
        <Outlet />
      </div>
      <BotonesSiguienteAnterior />
      <Home />
      <Toaster richColors></Toaster>
    </div>
  )
}

export default App;
