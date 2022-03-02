import React, {useState} from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde estado')

    const eventoClick = () => {
        console.log('he clicado')
        setTexto('Cambio de texto')
    }
  return (
    <div>
        <hr/>
        <h2>{texto}  </h2>
    <button onClick = { () => eventoClick()}> Click </button>
    </div>
  )
}

export default Eventos