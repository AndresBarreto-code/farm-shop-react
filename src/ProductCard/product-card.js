import React, { Component } from 'react'
import './product-card.scss'
import { Link } from "react-router-dom";

export default class ProductCard extends Component {  
    render() {
    return (
        <div class="card">
            <div class="card-image center-align">
                <img class="productImagen" src={this.props.producto.image} alt='No disponible'/>
            </div>

            <div class="card-content">
                <span class="card-title">{this.props.producto.name}</span>
                <p>Precio: ${this.props.producto.price}</p>
                <p>Unidades disponibles: {this.props.producto.stock}</p>
                <div class="row">
                    <div class="col s5 ">
                        <Link to={"/spa/"+this.props.producto.name} class="btn light-blue darken-4" >Ver mas</Link>
                    </div>
                    <div class="col s3 ">
                        <Link to={"/spa/"+this.props.producto.name} class="btn orange darken-4">A&ntilde;adir</Link>
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