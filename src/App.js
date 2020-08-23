import React from 'react';
import './App.css';
import Login from './Login/login';
import Nav from './Nav/nav';
import Catalog from './Catalog/catalog';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/spa/catalogo">
          <Nav></Nav>
          <div class="">
            <Catalog></Catalog>
          </div>
        </Route>
        <Route path="/spa/carrito">
          <Nav></Nav>
          <h1>Carrito</h1>
        </Route>
        <Route path="/spa/xyz">
          <Nav></Nav>
          <h1>xyz</h1>
        </Route>
        <Route path="/" exact>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
