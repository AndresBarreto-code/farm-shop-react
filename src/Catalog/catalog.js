import React, { Component } from 'react'
import './catalog.scss'
import ProductCard from '../ProductCard/product-card'

export default class Catalog extends Component {  
    render() {
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
                                <input class="left-align" type="text" placeholder="Digita tu producto"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row products">
                    <div  class="col s12 m4 l3">
                        <ProductCard>
                        </ProductCard>
                    </div>
                    <div  class="col s12 m4 l3">
                        <ProductCard>
                        </ProductCard>
                    </div>
                    <div  class="col s12 m4 l3">
                        <ProductCard>
                        </ProductCard>
                    </div>
                    <div  class="col s12 m4 l3">
                        <ProductCard>
                        </ProductCard>
                    </div>
                    <div  class="col s12 m4 l3">
                        <ProductCard>
                        </ProductCard>
                    </div>
                    <div  class="col s12 m4 l3">
                        <ProductCard>
                        </ProductCard>
                    </div>
                    <div  class="col s12 m4 l3">
                        <ProductCard>
                        </ProductCard>
                    </div>
                    
                </div>
            </div>

        )
    }
}