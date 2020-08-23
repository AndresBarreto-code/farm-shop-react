import React, { Component } from 'react'
import './nav.scss'
import { Link } from "react-router-dom";

export default class Nav extends Component {  
    render() {
    return (
        <div>
            <nav class=" grey lighten-1">
                <div class="nav-wrapper">
                    <a href="/spa/catalogo" class="brand-logo">
                        La Bodega
                    </a>
                    <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li><Link to="/spa/catalogo"><i class="material-icons">view_comfy</i></Link></li>
                            <li><Link to="/spa/carrito"><i class="material-icons">shopping_cart</i><small class="notification-badge red">1</small></Link></li>
                            <li><Link to="/spa/xyz"><i class="material-icons">move_to_inbox</i></Link></li>
                            <li><Link to="/"><i class="material-icons">keyboard_tab</i></Link></li>
                        </ul>
                </div>
            </nav>
            
            <ul class="sidenav" id="mobile-demo">
                <li><Link to="/spa/catalogo">Catalogo</Link></li>
                <li><Link to="/spa/carrito">Carrito de compras<span class="new badge red white-letter">1</span></Link></li>
                <li><Link to="/spa/xyz">Cosa que aun no se que es</Link></li>
                <li><Link to="">Log out</Link></li>
            </ul>
        </div>     
      )
    }
}