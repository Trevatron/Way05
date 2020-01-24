import React from 'react'
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import Email from '../img/email.svg';
import Call from '../img/call.svg';

export default function Rodape(){
    return(
        <Footer>
            <p class="endereço">R. Sete de Setembro, 66 - Centro, Rio de Janeiro - RJ, 20050-009</p>
            <Link to='/#Sob' className="item-fter">Sobre nós</Link>
            <Link to='/' className="item-fter">Projeto</Link>
            <Link to='/' className="item-fter">Contato</Link>
            <div class='contato'>
                <img src={Call} alt="telefone" className="telefone-logo"/><p>Telefone:(21)4002-8922</p>
                <img src={Email} alt="email" className="email-logo"/><p>Email:wayfortec@gmail.com</p>
            </div>
        </Footer>
    );
}

const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    padding: 3vw;
    background-image: linear-gradient(to bottom, orange , #330066);
    align-items: center;
   .item-fter:hover {
        font-size: 1.3em;
   }
   .item-fter{
        text-decoration: none;
        color: black;
        font-size: 0.8em;
        margin: 0;
        display: flex;
   }
   .email-logo{
        width:3vw;
        height:3vh;
   }
   .telefone-logo{   
        width:2vw;
        height:2vw;
   }
   .endereço{
        width: 10vw;
        text-align:center;
        color:black;
   }
`;