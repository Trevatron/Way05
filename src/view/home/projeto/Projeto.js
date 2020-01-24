import React from 'react';
import { Section } from './style';

import arrow from './img/right-arrow.svg';

export default function Projeto(){
    return(
        <Section>
            <h1>Projeto</h1>
                <section class='proj'  >
                    <p class='text1'>A wayfortec tem o objetivo de mostrar aos jovens de periferia o mundo feito pela tecnologia. Oferecemos a filtragem adequada à sua preferência, para você fazer o curso que você mais gostar.</p>
                    <img src={arrow} alt='seta' />
                    <p><br/>Não se sinta despreparado, a nossa plataforma oferece um módulo introdutório que te ajudará a se sentir apto a enfrentar qualquer desafio durante seu aprendizado.</p>
                    <img src={arrow} alt='seta' />
                    <p>Após de concluir com sucesso todos os cursos necessários à area que você escolheu, haverá mais um módulo exclusivo esperando por você. Aprenda como funciona e como entrar no mercado de tecnologia.</p>
                    <img src={arrow} alt='seta' />
                    <p><br/>Bônus<br/>Conheca também o WayToTheWorld, um evento feito para você demonstrar toda a sua capacidade, ajude a criar ideias que ajudem toda a comunidade.</p>
                </section>
            <hr/>
        </Section>
    );
}

