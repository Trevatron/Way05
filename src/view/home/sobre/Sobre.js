import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Section } from './style'

import Visao1 from './img/visao.png';
import Valores2 from './img/valores.png';
import Missao3 from './img/missao.png';

export default function Sobre(){
    return(
        <Section id='Sob'>
            <h1>Quem somos</h1>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src={Visao1}
                        alt="Imagem em branco"
                        />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h2></h2>
                        <p></p>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={Valores2}
                    alt="Imagem em branco"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h4></h4>
                        <p></p>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={Missao3}
                    alt="Imagem em branco"
                    />
                </Carousel.Item>
                </Carousel>
                <hr/>
            </Section>
    );
}

