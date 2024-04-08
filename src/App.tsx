
import './App.css';
import Home from './componentes/home';
import BarraProcessoTurno from './componentes/barraProcesoTurno';
import BotonesSiguienteAnterior from './botonesSiguienteAnterior';
import { useActions } from './redux/actions/actions';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Toaster } from "sonner";

function App() {

  const { getSeleccion } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    const seleccion = getSeleccion();
    if (seleccion.id === 0) navigate('/');
  }, []);

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
};

export default App;
