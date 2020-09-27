import React, { Component } from 'react'
import './product-card.scss'
import { Link } from "react-router-dom";

export default class ProductCard extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            qty: 1
        };
    };
    onInputchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });        
    }
    addProduct = () => {
        this.props.addProduct(this.state.qty, this.props.producto);
    }
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
                            <button onClick={this.addProduct} class="btn orange darken-4">A&ntilde;adir</button>
                        </div>
                        <div class="col s4 ">
                            <input class="center-align" type="number" name="qty" min='1' max='100' onChange={this.onInputchange} value={this.state.qty}/>
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}