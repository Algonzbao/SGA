import React from 'react'
import FotoAula from '../Aulas.jpg'
import Background from '../background/background';

const Aulas = () => {
  const [selectedAula, setSelectedAula] = React.useState(0);
  return (
    <div class="container d-flex">
      <div>
        <h1 className='text-light'>Seleccione un aula para visualizar </h1>
        <div id="ConjuntoCheckBox">
          <div class="form-check me-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
              Todas
            </label>
          </div>
          <div id="CheckboxAulas" class="d-flex">
            <div class="form-check me-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
              <label class="form-check-label" for="flexCheckChecked">
                Aulas informática
              </label>
            </div>
            <div class="form-check me-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
              <label class="form-check-label" for="flexCheckChecked">
                Aulas docencia
              </label>
            </div>
          </div>
          <div id="CheckboxSalones" class="d-flex">
            <div class="form-check me-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
              <label class="form-check-label" for="flexCheckChecked">
                Salones torre
              </label>
            </div>
            <div class="form-check SalonesNobles">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
              <label class="form-check-label" for="flexCheckChecked">
                Salones nobles
              </label>
            </div>
          </div>
        </div>
        <div> 
          <select class="form-select form-select-lg mt-4 mb-3 w-50" aria-label=".form-select-lg example" onChange={e => setSelectedAula(e.target.value)} defaultValue="0">
            <option selected value="0" >Selector de aulas</option>
            <option value="1">Aula 1</option>
            <option value="2">Aula 2</option>
            <option value="3">Aula 3</option>
          </select>
        </div>
        <div id= "FotoCuadro" class= "mt-5">
        <img src= {FotoAula} width="500" ></img>
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