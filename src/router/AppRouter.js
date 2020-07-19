import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { SelectionPage } from '../pages/SelectionPage';
import { Registro } from '../pages/Auth.jsx'
import { Login } from '../pages/LoginPage';
import { VistasMesero } from '../pages/VistaMesero';
import { VistasCocinero } from '../pages/VistaCocinero';

export const AppRouter = () => {
  return (
    <Router>
      <div className='btnGroup'>
        <Link to="/register" className='btnR'>Registrate</Link>
        <Link to="/login" className='btnI'>Inicia sesión</Link>
      </div>
      <Switch>

        <Route path="/contact" component={ContactPage} />
        <Route path="/selection" component={SelectionPage} />
        <Route path="/register" component={Registro} />
        <Route path="/login" component={Login} />
        <Route path="/mesero" component={VistasMesero} />
        <Route path="/cocinero" component={VistasCocinero} />
        <Route path="/" component={HomePage} />

      </Switch>

    </Router>
  );
}