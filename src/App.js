import React from 'react';
import './App.css';
import Login from './Login/login';
import Nav from './Nav/nav';
import Catalog from './Catalog/catalog';
import Shop from './Shop/shop';
import ViewProduct from './ViewProduct/view-peoduct';

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
          <div  class="spa">
            <Nav></Nav>
            <div class="container">
              <Catalog></Catalog>
            </div>
          </div>
        </Route>
        <Route path="/spa/:nombre">
          <div  class="spa">
            <Nav></Nav>
            <div class="container">
              <ViewProduct></ViewProduct>
            </div>
          </div>
        </Route>
        <Route path="/spa/carrito" class="principal">
          <div  class="spa">
            <Nav></Nav>
            <div class="container">
              <Shop></Shop>
            </div>
          </div>
        </Route>
        <Route path="/spa/xyz" class="principal">
          <div  class="spa">
            <Nav></Nav>
            <div class="container">
              <Catalog></Catalog>
            </div>
          </div>
        </Route>
        <Route path="/" exact>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
