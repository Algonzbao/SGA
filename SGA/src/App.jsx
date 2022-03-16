import React from 'react';
// import Eventos from './Componentes/Eventos';
//import Formulario from './Componentes/Formulario';
// import Parrafo from './Componentes/Parrafo';
// import Variables from './Componentes/Variables';
import Inicio from './Componentes/Inicio';
import Aulas from './Componentes/Aulas';
import Reservar from './Componentes/Reservar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="background">
                <div className="container" >
                    <div className="btn-group "></div>
                    <Link to="/" button class="btn">
                        <i class="fa fa-home"></i>
                    </Link>
                    <Link to="/aula" className="btn btn-dark botonAulas">
                        Ver Aulas
                    </Link>
                    
                    <Link to="/Reservar" className="btn btn-dark ms-2">
                        Ver Reservas
                    </Link>
                    <Switch>
                        <Route path="/Reservar">
                            <Reservar />
                        </Route>
                        <Route path="/aula">
                            <Aulas />
                        </Route>
                        <Route path="/">
                            <Inicio />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>

    );
}

export default App;

/* <h1 className='containe mt-5'> Hola mundo </h1>
              <button type="button" class="btn btn-success">Success</button>
          < Eventos />
              < Parrafo />
              < Variables />
              
          <Formulario />
          */
