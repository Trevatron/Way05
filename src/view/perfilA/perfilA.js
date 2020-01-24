import React from 'react';
import styled from 'styled-components';

export default function Perfil(){
    return (
        <Section>
            {/*usar getelement para inserir as informações dos alunos*/}
            <section class='perfil'>
                <div class='img-perfil'>
                    <img id='foto'/>
                </div>
                <div class='inf-perfil'>
                    <p id='nome'></p>
                    <p id='idade'></p>
                    <p id='prof'></p>
                </div>
            </section>
            <section class='prog'>
                <div class='progresso'>
                </div>
            </section>
        </Section>
    );
}

const Section = styled.section`
    img{
        border: 1px solid black;
        width: 20vw;
        height: 20vw;
    }
    p{
        width: 30vw;
        height: 2vw;
        border: 1px solid black;
    }
    .inf-perfil{
        margin-left: 2vw;
    }
    .perfil{
        display: flex;
        justify-content: center;
    }
    .prog{
        margin-top: 2vw;
        display: flex;
        justify-content: center;
    }
    .progresso{
       
        width: 80vw;
        height: 40vw;
        border: 1px solid black;
    }
`;