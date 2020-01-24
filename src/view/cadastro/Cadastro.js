import React from 'react';
import { Form } from './style';

export default function Cadastro(){
    return(
        <Form action='somewhere'>
            <section class='name-date'>
                <span>Nome completo:</span>
                <span>Data de nascimento:</span>
                <input id='teste'  class='name' type='text' />
                <input onmouseover='this.' type='date' class='nasc'/>
            </section>
            <span>Email:</span>
            <input class='email' type='email' />
            <span>Telefone:</span>
            <input class='phone-rg-cpf-edr' type='tel'  />
            <span>RG:</span>
            <input class='phone-rg-cpf-edr' type='number' />
            <span>CPF:</span>
            <input class='phone-rg-cpf-edr' type='number'/>
            <span>Endereço:</span>
            <input class='phone-rg-cpf-edr' type='text'/>
            <div class='options'>
                <span>Escolaridade:</span>
                <span>Quantas pessoas moram na sua casa?(Contando com você)</span>
                <select name='escolaridade'>
                    <option value=''>--</option>
                    <option value=''>Opção 1</option>
                    <option value=''>Opção 2</option>
                    <option value=''>Opção 3</option>
                    <option value=''>Opção 4</option>
                    <option value=''>Opção 5</option>
                </select>
                <select name='carreira'>
                    <option value=''>--</option>
                    <option value=''>Opção 1</option>
                    <option value=''>Opção 2</option>
                    <option value=''>Opção 3</option>
                    <option value=''>Opção 4</option>
                    <option value=''>Opção 5</option>
                    <option value=''>Opção 6</option>
                    <option value=''>Opção 7</option>
                </select>
                <span>Qual carreira você deseja seguir?</span>
                <span>Como é seu aprendizado?</span>
                <select name='carreira'>
                    <option value=''>--</option>
                    <option value=''>Opção 1</option>
                    <option value=''>Opção 2</option>
                    <option value=''>Opção 3</option>
                    <option value=''>Opção 4</option>
                    <option value=''>Opção 5</option>
                    <option value=''>Opção 6</option>
                    <option value=''>Opção 7</option>
                </select>
                <select name='aprendizado'>
                    <option value=''>--</option>    
                    <option value=''>Opção 1</option>
                    <option value=''>Opção 2</option>
                    <option value=''>Opção 3</option>
                    <option value=''>Opção 4</option>
                    <option value=''>Opção 5</option>
                    <option value=''>Opção 6</option>
                    <option value=''>Opção 7</option>
                </select>
            </div>
            <button class='bot'type='submit'>Confirmar</button>
    </Form>
    );
}