import React from 'react';
import { Section } from './style'

import Geysa from './img/geysa.jpeg';
import Jean from './img/jean.jpeg';
import Leandro from './img/leandro.jpeg';
import Pedro from './img/pedro.jpeg';
import Raphael from './img/rapha.jpeg'; 
import Marilia from './img/marilia.jpg';

export default function Integrantes (){
    return (
        <Section>
            <div>
                <h1>Idealizadores</h1>
            </div>
            <figure class='integ'>
                <img class='perfil' src={Geysa} alt='Geysa'/>
                <img class='perfil' src={Jean} alt='Jean'/>
                <p>
                    <li><b>Geysa França</b></li>
                    <li>Solteira</li>
                    <li>20 Anos de idade</li>
                    <li>Desenvolvedora FullStack</li>
                    <li>Coordenadora do programa Batalha dos Prazeres</li>
                    <li>Desenvolvedora Front-End</li>
                    <li>Entusiasta em tecnologia</li>
                </p>

                <p>
                    <li><b>Jean Gomes</b></li>
                    <li>Solteiro</li>
                    <li>18 Anos de idade</li>
                    <li>Desenvolvedor Full Stack</li>
                    <li>Desenvolvedor Front-End</li>
                    <li>Técnico em Informática</li>
                    <li>Entusiasta em tecnologia</li>
                    
                    
                </p>
                    
                <img class='perfil' src={Leandro} alt='Leandro'/>
                <img class='perfil' src={Raphael} alt='Raphael'/>
                    <p>
                        <li><b>Leandro Ricardo</b></li>
                        <li>Casado</li>
                        <li>30 Anos de Idade</li>
                        <li>Desenvolvedor Full Stack</li>
                        <li>Desenvolvedor Back-End(Java)</li>
                        <li>12 Anos de Atuação em Hardware</li>
                        <li>Técnico em Informática</li>
                        <li>Desenvolvedor .Net</li>

                    </p>

                <p>
                    <li><b>Raphael da Silva</b></li>
                    <li>Solteiro</li>
                    <li>23 Anos de Idade</li>
                    <li>Desenvolvedor Full Stack</li>
                    <li>Técnico em Informática</li>
                    <li>Teólogo</li>
                    <li></li>
                </p>
                <img class='perfil' src={Pedro} alt='Pedro'/>
                <img class='perfil' src={Marilia} alt='Marilia'/>
                <p>
                    <li><b>Pedro Augusto</b></li>
                    <li>Solteiro</li>
                    <li>18 Anos de idade</li>
                    <li>Desenvolvedor Full Stack</li>
                    <li>Game Developer</li>
                    <li>Programmer of Arduino</li>
                    <li>Poeta do Slam</li>
                </p>

                <p>
                    <li><b>Marília Mendonça</b></li>
                    <li>Solteira</li>
                    <li>20 Anos de idade</li>
                    <li>Analista de Négocios</li>
                    <li>UX UI Design</li>
                </p>
            </figure>
        </Section>
    );
}