import './Profile.css';
import {useLocation} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';

function Profile() {

    const [repositories, setRepositories] = useState([]);
    const { state } = useLocation();
    const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

    function getRelativeTime(timestamp) {
        const rtf = new Intl.RelativeTimeFormat('br', {
            numeric: 'auto',
        });
        const daysDifference = Math.round(
            (timestamp - new Date().getTime()) / DAY_MILLISECONDS,
        );

        return rtf.format(daysDifference, 'day');
    }

    function compare( a, b ) {
        if ( a.stargazers_count > b.stargazers_count ){
          return -1;
        }
        if ( a.stargazers_count < b.stargazers_count ){
          return 1;
        }
        return 0;
      }

    const openInNewTab = (url) => {
        url.indexOf("http") === -1 ?
        window.open("https://" + url, '_blank').focus() :
        window.open(url, '_blank').focus();
    }

    useLayoutEffect(() => {
        axios
        .get('https://api.github.com/users/' + state?.login + '/repos')
        .then((response) => {
            const orderArray = response.data.sort(compare);
            setRepositories(orderArray);
        })
     }, [state?.login]);

   return (
    <div className='profile'>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <div className='row'>
            <div className='logo'>
                <h1>
                    <span style={{color:"#0069CA"}}>Search </span>
                    <span style={{color:"#8C19D2"}}>d_evs</span>
                    </h1>
                </div>
                <div className="input-group p-0 col-4 offset-md-4">
                    <span className="input-group-text" id="search-addon-profile"><i className="bi bi-search"></i></span>
                    <input value={state?.login} type="text" className="col-md-10 col-sm-10 col-10 search form-control" placeholder="Insira o Username do Usuário GitHub" aria-label="Username" aria-describedby="search-addon-profile"></input>
                </div>
            </div>
        </nav>

        <div className='row'>
            <div className="col-xl-4">
                <div className="card card-profile">
                    <div className="card-body">
                    <div className="row no-gutters mb-3">
                        <div className="col-md-4">
                            <img src={state?.avatar_url} className="card-img" alt="Imagem"/>
                            </div>
                            <div className="col-md-8 p-0">
                                <div className="card-body p-0">
                                    <h5 className="card-title">{state?.name}</h5>
                                    <p className="card-subtitle mb-2 text-muted">@{state?.login}</p>
                                </div>
                            </div>
                        </div>
                        <p className="card-text text-muted">{state?.bio}</p>
                        <div className='follows text-muted  '>
                            <p className="list-group-item m-0"><i className="bi bi-people">
                                </i> {state?.followers} Seguidores</p>
                            <p className="list-group-item m-0"><i className="bi bi-heart">
                                </i> {state?.following} Seguindo</p>
                        </div>
                        <div className='text-muted'>
                            <p className="list-group-item m-0"><i className="bi bi-building">
                                </i> {state?.company ? state?.company : "Não Informado" }</p>
                            <p className="list-group-item m-0"><i className="bi bi-geo-alt">
                                </i> {state?.location ? state?.location : "Não Informado"}</p>
                            <p className="list-group-item m-0"><i className="bi bi-envelope">
                                </i> {state?.email ? state?.email : "Não Informado"}</p>
                            <p className="list-group-item m-0"><i className="bi bi-link-45deg">
                                </i> {state?.blog ? state?.blog : "Não Informado"}</p>
                            <a href={state?.twitter_username ? "https://twitter.com/" + state?.twitter_username : state?.twitter_username}
                             className="list-group-item m-0"><i className="bi bi-twitter">
                                </i> {state?.twitter_username ? state?.twitter_username : "Não Informado"}</a>
                        </div>
                    </div>
                </div>
                {state?.blog
                    ?
                        <button data-toggle="tooltip" data-placement="left" title="Acessar site do usuário" onClick={() => {openInNewTab(state?.blog)}} className="btn">Contato</button>
                    : 
                        <button disabled onClick={() => {openInNewTab(state?.blog)}} className="col-md-2 col-sm-2 col-2 btn">Nenhum site informado</button>
                }
            </div>
            <div className="col-xl-8">
                { repositories.map(function(item) {
                    return <div className="card">
                    <div className="card-body">
                        <a className='title' href={item?.html_url}><h5 className="card-title">{item?.name}</h5></a>
                        <p className="card-text text-muted">{item?.description}</p>
                        <p className="card-text timed text-muted"><i className="bi bi-star"> </i>{item?.stargazers_count} • atualizado {getRelativeTime(new Date(item?.updated_at.split("T")[0]).getTime())}</p>
                    </div>
                </div>
                })
                }
            </div>
        </div>
    </div>
  );
}
  
export default Profile;