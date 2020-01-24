import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    width: 100vw;
    margin-left: 2vw;
    .name{
        width: 20vw;
}
    .email{
        width: 20vw;
}
    .phone-rg-cpf-edr{
        width: 33vw;
}
    .name-date{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 3vw;
}
    input:focus{
        background: #FFC;
}
    input{
        width: 50vw;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
}
    .options{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
}
    .nasc{
        width: 10vw;
}

    select{
        width: 10vw;
}
    .bot{
        display:inline-block;
        padding:0.3em 1.2em;
        margin:1vw 0.3em 0.3em 0;
        border-radius:2em;
        box-sizing: border-box;
        text-decoration:none;
        font-family:'Roboto',sans-serif;
        font-weight:300;
        color:#FFFFFF;
        background-color:#4eb5f1;
        text-align:center;
        transition: all 0.2s;
}
    bot:hover{
        background-color:#4095c6;
}
    @media all and (max-width:30em){
        bot{
            display:block;
            margin:0.2em auto;
    }
} 
`;