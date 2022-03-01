import React from "react";


const Botones = () => {
    const eventoClick = () => {
        <script>
        document.write('Hola');
        </script>
    }
  return (
    <div>
        <button type="button" class="btn btn-secondary" onClick = { () => eventoClick()} >VERDE</button>
    </div>
  )
}

export default Botones