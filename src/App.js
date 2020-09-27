import React from 'react';
import './App.css';
import Login from './Login/login';
import Nav from './Nav/nav';
import Catalog from './Catalog/catalog';
import Shop from './Shop/shop';
import ViewProduct from './ViewProduct/view-product';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let addProduct = (qty, prod) => {}
  return (
    <Router>
      <Switch>
        <Route path="/spa/catalogo">
          <div  classNameName="spa">
            <Nav addProduct={addProduct}></Nav>
            <div classNameName="container">
              <Catalog addProduct={addProduct}></Catalog>
            </div>
          </div>
        </Route>
        <Route path="/spa/:name" render={(props) => 
            <div  classNameName="spa">
              <Nav addProduct={addProduct}></Nav>
              <div classNameName="container">
                <ViewProduct {...props}></ViewProduct>
              </div>
            </div>
          }>          
        </Route>
        <Route path="/spa/carrito" className="principal">
          <div  classNameName="spa">
            <Nav addProduct={addProduct}></Nav>
            <div className="container">
              <Shop></Shop>
            </div>
          </div>
        </Route>
        <Route path="/spa/xyz" className="principal">
          <div  className="spa">
            <Nav addProduct={addProduct}></Nav>
            <div className="container">
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
