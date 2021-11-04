import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './screens/Home'
import { ToastContainer } from 'react-toastify';

//Components
import Navbar from './components/navbar/navbar.component';
import Register from './screens/Register';
import Login from './screens/Login';

const Routes = () => {
    return (
    <BrowserRouter>
        <Navbar/>
        <ToastContainer/>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
        </Switch>
    </BrowserRouter>
    )
  
}
export default Routes;