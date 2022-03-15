import React from 'react'
import Aula from './Aulas';
import Reservar from './Reservar';

import {
  BrowserRouter as Route,
  Link,
} from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      <div className="container bloqueFotos" >
        <div className='btn-group'>
          <div className="derecha">
            <Link to="/aula">
              <img src="https://firebasestorage.googleapis.com/v0/b/sga-ghis.appspot.com/o/IMG_0326.jpg?alt=media&token=9b2b22b0-97c4-4852-b4d2-6220ba7b2d88" width="30%" />
            </Link>
          </div>
          <div className='izquierda'>
            <Link to="/Reservar" >
              <img src="https://firebasestorage.googleapis.com/v0/b/sga-ghis.appspot.com/o/ordenador.jpg?alt=media&token=1f73ab38-0a79-4556-8573-d55e18743d40" width="30%" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio