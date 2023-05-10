import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
          <div className='logo'>
           <h1>
              <span style={{color:"#0069CA"}}>Search </span>
              <span style={{color:"#8C19D2"}}>d_evs</span>
            </h1>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
            <input type="text" class="col-md-10 col-sm-10 col-10 search form-control" placeholder="Insira o Username do Usuário GitHub" aria-label="Username" aria-describedby="basic-addon1"></input>
            <button className="col-md-2 col-sm-2 col-2 btn" type="submit">Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
