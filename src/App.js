import React from 'react';
import Parrafo from './Componentes/Parrafo';
import Variables from './Componentes/Variables';
import Eventos from './Componentes/Eventos';
import Botones from './Componentes/Botones';

function App(){
    return (
        <div>
            <h1 className='Titulo'> Hola mundo </h1>
            <Parrafo />
            <Botones />
            <Variables />
            <Eventos />
            
        </div>
    )  
}

export default App;