import styled from 'styled-components';

export const Section = styled.section`
    .integ{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }
    div{
        display: flex;
        justify-content: center;
    }
    img{
        width: 15vw;
        border-radius: 50%;
    }
    li,b{
        list-style:none;
        text-align:center;
    }
    .perfil{
        border-radius: 30vw;
    }
`;