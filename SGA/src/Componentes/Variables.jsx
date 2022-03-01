import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde constante'; //Crear una constante con un valor y luego llamarla
    const imagen = 'https://geografiaehistoria.ucm.es/data/cont/docs/5-2018-04-11-5-portada-1%20(1).jpg'
    return (
    <div>
        <h2>Nuevo componente {saludo}</h2> 
        <img src= {imagen} alt= ""/>
    </div>
  )
}

export default Variables