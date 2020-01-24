import styled from 'styled-components'

export const Section = styled.section`
    hr{
        border-color: #4F76E8;
        width: 70vw;
        border-width: 0.1em;
        margin: 7vw 0vw 7vw 14.7vw;
}
    .a{
        text-decoration: none;
}
    .container-principal-home{
        background: url('./src/img/programming.jpg');
        background-size: cover;
        width: 100%;
        align-items: center;
        margin: 0em;
        padding: 0em;
        display: flex;
        justify-content: center;
    }
    img{
        width: 11vw;
    }
    
    .boxyn:hover{
        background: white;
        color: black;
        transition: 1s;
    }

    .boxyn{
        padding: 2vw;
        text-align: center;
        background: linear-gradient(to bottom, #003df1, #1b70cca6);
        box-shadow: 1px 3px 2px 1px #1f68b7;
        color: white;
        margin: 2vw;
        border-radius: 10vw;
}


integ{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
   
    margin-left: 150px;
}

}
div{
    display: flex;
    justify-content: center;
}

li,b{
    list-style:none;
    text-align:center;
}
.perfil{
    width: 200px;
    text-align: center;
    margin: 10vw
}

.perfil2{
    width: 550px;
    text-align: center;
    
}

`;

