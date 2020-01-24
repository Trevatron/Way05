import styled from 'styled-components';

import project from './img/project.jpg';

export const Section = styled.section`
    font-size: 1em;
    text-align: center;
    hr{
        border-color: #4F76E8;
        width: 70vw;
        border-width: 0.1em;
        margin: 7vw 0vw 7vw 14.7vw;
    }
    .text1{
        margin-top: 1vw;
    }
    .proj{
        border-radius:5vw;
        background-image: url(${project});
        display: flex;
        justify-content: space-around;
    }
    h1{ 
        margin-bottom: 2vw;
        color: #ff8317;
    }
    p{
        width: 14vw;
        text-align: center;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ff8317;
        font-size: 20px; color: #000;
    }
    img{
        width: 3vw;
}
`;