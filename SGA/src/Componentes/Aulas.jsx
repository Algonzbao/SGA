import React from 'react'
import FotoAula from '../Aulas.jpg'
import Background from '../background/background';

const Aulas = () => {
  const [selectedAula, setSelectedAula] = React.useState(0);
  return (
    <div >
      <div>
        <div className="bloqueIzquierda col-md-7 row g-0" class="container ">
          <h1 className='text-light'>Seleccione un aula para visualizar </h1>
          <div id="ConjuntoCheckBox">
            <div class="form-check me-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
              <label class="form-check-label" htmlFor="flexCheckDefault">
                Todas
              </label>
            </div>
            <div id="CheckboxAulas" class="d-flex">
              <div class="form-check me-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                <label class="form-check-label" htmlFor="flexCheckChecked">
                  Aulas informática
                </label>
              </div>
              <div class="form-check me-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                <label class="form-check-label" htmlFor="flexCheckChecked">
                  Aulas docencia
                </label>
              </div>
            </div>
            <div id="CheckboxSalones" class="d-flex">
              <div class="form-check me-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                <label class="form-check-label" htmlFor="flexCheckChecked">
                  Salones torre
                </label>
              </div>
              <div class="form-check SalonesNobles">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                <label class="form-check-label" htmlFor="flexCheckChecked">
                  Salones nobles
                </label>
              </div>
            </div>
            <div>
              <select class="form-select form-select-lg mt-4 mb-3 w-50" aria-label=".form-select-lg example" onChange={e => setSelectedAula(e.target.value)} defaultValue="0">
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


        <div className="infoAulaCard col-md-5 " class="card ">
          <h5 class="card-title">Aula 1</h5>
          <div className="elementosAula">
            <ul className="list-group col-md-3">
              <li className="list-group-item d-flex justify-content-between align-items-center burbujaElemento">
                Pizarra
                <span className="badge bg-primary rounded-pill">Si</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Altavoces
                <span className="badge bg-primary rounded-pill">Si</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Aire Acondicionado
                <span className="badge bg-primary rounded-pill">No</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Tipo
                <span className="badge bg-primary rounded-pill">Docencia</span>
              </li>
            </ul>
          </div>
          <div className="elementosAula">
            <ul className="list-group col-md-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Orenadores
                <span className="badge bg-primary rounded-pill">14</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Asientos
                <span className="badge bg-primary rounded-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Enchufes
                <span className="badge bg-primary rounded-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Proyector
                <span className="badge bg-primary rounded-pill">Si</span>
              </li>
            </ul>
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