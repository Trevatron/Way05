import React from 'react';


import Buttons from './buttons/Buttons';
import Sobre from './sobre/Sobre';
import Projeto from './projeto/Projeto';
import Integrantes from './integrantes/Integrantes'

export default function Home(){
    return(
        <section id='ho'>
            <Buttons/>
            <Projeto/>
            <Sobre/>
            <Integrantes/>
        </section>
    );
}