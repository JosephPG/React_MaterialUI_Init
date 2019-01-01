import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import Registrar from './components/Registrar';

const AppRoutes = () =>    
    <App>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Registrar" component={Registrar} />
        </Switch>
    </App>
    
export default AppRoutes;