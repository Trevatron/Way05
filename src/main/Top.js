import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../img/logo1.svg';
import login from '../img/login.svg';

export default function Top(){
    return(
        <Header>
            <div className="container-menu">
                <Link to='/'><img className="logo" src={logo} alt="Logo"/></Link>
                <nav className="menu">
                    <Link to='/#Sob' className="item-menulist">Sobre nós</Link>
                    <Link to="#" className="item-menulist">Projeto</Link>
                    <Link to="#" className="item-menulist">Contato</Link>
                    {/*<div id="divBusca">
                        <input type="text" id="txtBusca" href='/' placeholder="Buscar..."/>
                        <img src="search3.png" id="btnBusca" alt="Buscar"/>
                    </div>*/} 
                </nav>
                <div className="box-login">
                    <button className="button-login">      
                        <Link to='/perfil'><img src={login} alt="login" className="img-login"/><p className="submit-login">Entrar</p></Link>
                    </button>
                    <Link to='/cadastro'><button className="button-sigin">Inscrever-se</button></Link>
                </div>
            </div>
        </Header>
    );
}

const Header = styled.header`
#divBusca{
    background-color: #330066;
    border:solid 1px;
    border-radius:15px;
    width:10vw;
  }
   
  #txtBusca{
    float:left;
    background-color:transparent;
    padding-left:5px;
    font-style:italic;
    font-size:18px;
    border:none;
    height:32px;
    width:260px;
  }
    .container-menu{
       display: flex;
       padding: 3vw;
       margin-bottom: 10vw;
       justify-content: center;
       height: 13vw;
       align-items: center;
       background-image: linear-gradient(to top, #551A8B, #7A378B);
    }
    .logo{
        width: 15vw;
    }
    .menu {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: space-around;
        
    }
    .box-login {  
        margin: 9vh;
        width: 20%;
        
    }
    .item-menulist {
        font-size: 1.8em;
    }
    a {
        padding: 2vw;
        color: black;
        text-decoration: none;
    }
    .item-menulist {
        height: 6vw;
        color: #FF7256;
        font-weight: bold;
    }
    a:hover {
        color: #FF7256;
        text-decoration: none;
    }
    .button-login{
        display: flex;
        background: none;
        border: none;
        text-decoration: none;
        align-items: center;
        outline: none;

    }
    .img-login {
        color: #FF7256;
        padding: 0 1vw 0 0;
    }

    .submit-login {
        height: 2vh;
        padding: 0 2vw 0 0;
        color: #FF7256;
    }
    .button-sigin{
        background-color: #FF7256;
        width: 12vw;
        height: 6vh;
        border: none;
        border-radius: 9px;
        color: white;
    }

    .box-login{
        display: flex;
        align-items: center;
        color: #FF7256;
    }
`;