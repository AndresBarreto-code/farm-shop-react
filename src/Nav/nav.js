import React, { Component } from 'react'
import './nav.scss'
import { Link } from "react-router-dom";

export default class Nav extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            qty: 0,
            prod: {}
        }
    }
    shouldComponentUpdate(){
        this.props.addProduct(this.state.qty, this.state.prod);
        console.log(this.state.qty)
        console.log(this.state.prod)

    }
    
    render() {        
        let qty = 0;
        let prod = {};
        
        let qtyNotification = qty > 0 ? <small class='notification-badge red'>{qty}</small> : '';
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
                                <li><Link to="/spa/carrito"><i class="material-icons">shopping_cart</i>{qtyNotification}</Link></li>
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