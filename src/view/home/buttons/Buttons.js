import React from "react";
import { Link } from 'react-router-dom';
import { Section } from './style'
import PedroAv from './img/gif1.png';
import Falapedro from './img/balon.png';


export default function Buttons(){
    return(
        <Section>
           <figure class='integ'>
                <img class='perfil' src={PedroAv} alt='Pedroav'/>
                <img class='perfil2' src={Falapedro} alt='falapedro'/>
                <p>oi</p>
                <br></br>
                </figure>
          <div className="container-principal-home">
            <Link to='/aluno' class='a'><div className="boxyn studant">
              <h2 className="title-studant">Área do Aluno</h2>
            </div></Link>
            <Link to='/cadastro' class="a"><div className="boxyn subscription">
              <h2 className="title-subscription">Quero me inscrever!</h2>
            </div></Link>
          </div>
          <hr/>
        </Section>
);  
}