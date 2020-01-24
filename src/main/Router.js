import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../view/home'
import Login from '../view/login/login'
import Cadastro from '../view/cadastro/Cadastro'
import Perfil from '../view/perfilA/perfilA'

export default function Router(){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cadastro' component={Cadastro}/>
            <Route exact path='/perfil' component={Perfil}/>
        </Switch>
    );
}