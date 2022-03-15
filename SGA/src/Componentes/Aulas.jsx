import React from 'react'
import FotoAula from '../Aulas.jpg'
import Background from '../background/background';

const Aulas = () => {
  const [selectedAula, setSelectedAula] = React.useState(0);
  return (
    <div >
      <h1 className='text-light'>Seleccione un aula para visualizar </h1>
      <div className="d-flex">

        <div className="bloqueIzquierda " class="container">

          <div id="ConjuntoCheckBox">
            <div class="form-check me-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
              <label class="form-check-label text-light" htmlFor="flexCheckDefault">
                Todas
              </label>
            </div>
            <div id="CheckboxAulas" class="d-flex">
              <div class="form-check me-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                <label class="form-check-label text-light" htmlFor="flexCheckChecked">
                  Aulas informática
                </label>
              </div>
              <div class="form-check me-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                <label class="form-check-label text-light" htmlFor="flexCheckChecked">
                  Aulas docencia
                </label>
              </div>
            </div>
            <div id="CheckboxSalones" class="d-flex">
              <div class="form-check me-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                <label class="form-check-label text-light" htmlFor="flexCheckChecked">
                  Salones torre
                </label>
              </div>
              <div class="form-check SalonesNobles">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                <label class="form-check-label text-light" htmlFor="flexCheckChecked">
                  Salones nobles
                </label>
              </div>
            </div>
            <div>
              <select className="form-select form-select-lg desplegableAulas mt-4 mb-3 w-50" aria-label=".form-select-lg example" onChange={e => setSelectedAula(e.target.value)} defaultValue="0">
                <option defaultValue="0" >Selector de aulas</option>
                <option value="1">Aula 1</option>
                <option value="2">Aula 2</option>
                <option value="3">Aula 3</option>
              </select>
            </div>
            <div id="FotoCuadro" class="mt-5">
              <img src={FotoAula} width="500" ></img>
            </div>
          </div>
        </div>

        <div className="infoAulaCard  ms-1 ">
          <div className='d-flex justify-content-center mb-3'><h4 className="card-title text-light ">Aula 1</h4></div>
          <div className="nombreAula d-flex">
            <div className="elementosAulaIz">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center elementoAula">
                  Pizarra
                  <span className="badge badgeaula rounded-pill">Si</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center elementoAula">
                  Altavoces
                  <span className="badge badgeaula rounded-pill">Si</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center elementoAula">
                  Aire Acondicionado
                  <span className="badge badgeaula rounded-pill">No</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center elementoAula">
                  Tipo
                  <span className="badge badgeaula rounded-pill">Docencia</span>
                </li>
              </ul>
            </div>
            <div className="elementosAulaDr">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center elementoAula">
                  Orenadores
                  <span className="badge badgeaula rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center elementoAula">
                  Asientos
                  <span className="badge badgeaula rounded-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center elementoAula">
                  Enchufes
                  <span className="badge badgeaula rounded-pill">1</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center elementoAula">
                  Proyector
                  <span className="badge badgeaula rounded-pill">Si</span>
                </li>
              </ul>
            </div> 
           
          </div>
          <div className="botonEditar d-flex aling-items-center"> 
          <button class="editarboton btn btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aulas


/* <Router>
         
          <Switch>
             <Link to= "/" className="btn btn-primary"> 
              Home 
            </Link> 
             <Route path="/"> 
                <Inicio />
             </Route>
          </Switch>
      </Router> */