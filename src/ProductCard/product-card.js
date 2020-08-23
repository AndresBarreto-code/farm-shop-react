import React, { Component } from 'react'
import './product-card.scss'

export default class ProductCard extends Component {  
    render() {
    return (
        <div class="card">
            <div class="card-image center-align">
                <img class="productImagen" src=""/>
            </div>

            <div class="card-content">
                <span class="card-title">Titulo</span>
                <p>Precio: $00.00</p>
                <p>Unidades disponibles: 100</p>
                <div class="row">
                    <div class="col s5 ">
                        <a class="btn light-blue darken-4">Ver mas</a>
                    </div>
                    <div class="col s3 ">
                        <a class="btn orange darken-4">A&ntilde;adir</a>
                    </div>
                    <div class="col s4 ">
                        <input class="center-align" type="number" placeholder="1" min='1' max='100'/>
                    </div>
                </div>
            </div>
        </div>         
      )
    }
}