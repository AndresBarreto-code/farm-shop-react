import React, { Component } from 'react'
import './catalog.scss'
import ProductCard from '../ProductCard/product-card'
import axios from 'axios'

const productosAxios = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default class Catalog extends Component {
    constructor(props){
        super(props);
        this.state = {
            productos: [],
            productosMostrar: [],
            productosHtml: []
        };
        productosAxios.get('https://farm-store-3487f.firebaseio.com/Products.json')
        .then((res) => {
            Object.keys(res.data).map((key) => {
                this.setState(state => {
                    const productos = state.productos.concat(res.data[key]);
                    const productosMostrar = state.productosMostrar.concat(res.data[key]);
                    return {
                        productos: productos,
                        productosMostrar: productosMostrar
                    };
                });
                return null;
            })
        })
        .catch((err) => console.log(err));        
    }
    componentWillMount(){
              
    }
    change=(event) => { 
        let products = [];
        this.state.productos.map((product) => {
          if(product.name.toUpperCase().startsWith(document.getElementById('filtro').value.toUpperCase())) {
            products.push(product);
          };
          return null;
        })
        this.setState({productosMostrar: products});
      }
    
    render() {
        let productosHtml = [];
        this.state.productosMostrar.forEach((producto) => {
            productosHtml.push(<div class="col s12 m4 l3">
                                    <ProductCard producto={producto}></ProductCard>
                                </div>
                            )
            return null;            
        })
        return (
            <div class="card">
                <div class="row">
                    <div class="col 12 m6">
                        <h1 class="hide-on-small-only">Cat&aacute;logo de productos </h1>
                        <h4 class="hide-on-med-and-up">Cat&aacute;logo de productos </h4>
                        <button hidden></button>
                    </div>
                    <div class="col s12 m6">
                        <div class="row">
                            <div class="col s12">
                                <h5>¿Qu&eacute; estas buscando?</h5>
                            </div>
                            <div class="col s12">
                                <input class="left-align" id="filtro" type="text" placeholder="Digita tu producto" onChange={this.change}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row products">
                    {productosHtml}                    
                </div>
            </div>

        )
    }
}