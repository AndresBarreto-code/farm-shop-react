import React, { Component } from 'react'
import './view-product.scss'
import { Link, useRouteMatch } from "react-router-dom";
import axios from 'axios'

const productosAxios = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default class ViewProduct extends Component {
    match = useRouteMatch();
    
    constructor(props){
        super(props);
        
        console.log(this.props.match)
        this.state = {
            producto: {}
        };
        productosAxios.get('https://farm-store-3487f.firebaseio.com/Products.json')
        .then((res) => {
            Object.keys(res.data).map((key) => {
                if(res.data[key].name===this.props.match.params.nombre) this.setState({producto:res.data[key]});
                return null;
            });
        })
        .catch((err) => console.log(err));        
    }
    render() {
        return (
            <div class="row view-product white card">
                <div class="col s12">
                    <h2 class="header">{this.state.producto.name}</h2>
                    <div class="card horizontal">
                        <div class="card-image">
                            <img src={this.state.producto.image} alt="No disponible"/>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <h4>Precio: ${this.state.producto.precio}</h4>
                                <h5>Unidades disponibles: {this.state.producto.stock}</h5>
                            </div>
                            <div class="card-action">
                                <Link to="/spa/catalogo" class="btn light-blue darken-4">Atras</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}