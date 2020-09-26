import React, { Component } from 'react'
import './shop.scss'

export default class Shop extends Component {  
    render() {
        return (
            <div class="card">
                <div class="row">
                    <div class="col 12 m6">
                        <h1 class="hide-on-small-only">Carrito de Compras </h1>
                        <h4 class="hide-on-med-and-up">Carrito de Compras</h4>
                    </div>
                    
                </div>
                <div class="row products">
                    <div class="col s8">
                        <table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                <tr>
                                <td>Nombre
                                    <img src="/" alt=""/>
                                </td>
                                <td>Qty</td>
                                <td>Pricetotal</td>
                                </tr>
                            </tbody>
                        </table>            
                    </div>
                    <div class="col s4 total">
                        <h4>TOTAL: $ <span>Total</span></h4>
                        <button class="btn red darken-3">Cancelar</button>
                        <button class="btn blue darken-3">Pagar</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}