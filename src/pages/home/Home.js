import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import {useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const username = useRef(null);
  const [requestError, setRequestError] = useState(false);

  const getUserGit = () => {
    axios
      .get('https://api.github.com/users/' + username?.current?.value)
      .then((response) => {
        return navigate("/perfil", {state: response.data});
      })
      .catch(() => {
        setRequestError(true);
      });
  }

  return (
    <div className="App">
      <div className='container'>
          <div className='logo'>
           <h1>
              <span style={{color:"#0069CA"}}>Search </span>
              <span style={{color:"#8C19D2"}}>d_evs</span>
            </h1>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
            <input ref={username} type="text" className="col-md-10 col-sm-10 col-10 search form-control" placeholder="Insira o Username do Usuário GitHub" aria-label="Username" aria-describedby="basic-addon1"></input>
            <button className="col-md-2 col-sm-2 col-2 btn" onClick={getUserGit}>Buscar</button>
          </div>
          {requestError === true
           ?
            <div className='col-8 offset-md-2 alert alert-danger'>
              <h6>Não foi possivel encontrar um usuário com o username informado</h6>
            </div>
          : 
            <div>
            </div>
          }
      </div>
    </div>
  );
}

export default Home;
