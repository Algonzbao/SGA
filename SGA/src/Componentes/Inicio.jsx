import React from 'react'
import ReactDOM from 'react-dom'
import Aula from './Aulas';
import Reservar from './Reservar';

import {
  BrowserRouter as Route,
  Link,
} from "react-router-dom";

const Welcome = 'Portal de consulta de aulas.';


/*
function tick() {
       {new Date().toLocaleTimeString()}
  ReactDOM.render(document.getElementById('root'));
}
setInterval(tick, 1000);
/*

/*
function Felcome(props) {  return <h1>Hello, {props.name}</h1>;
}

const element = <Felcome name="Sara" />;ReactDOM.render(
  element,
  document.getElementById('root')
); */



function Inicio() {
  return (
    <div>
      <h1 className="text-light" classNam= "mt-5"> {Welcome} </h1>
      <div id="container_bloqueFotos">
        <div className='btn-group'>
          <div id ="derecha" className= "mt-5">
            <Link to="/aula">
              <img src="https://firebasestorage.googleapis.com/v0/b/sga-ghis.appspot.com/o/IMG_0326.jpg?alt=media&token=9b2b22b0-97c4-4852-b4d2-6220ba7b2d88" width="100%" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio