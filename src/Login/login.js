import React, { Component } from 'react'
import './login.scss'

export default class Login extends Component {  
    render() {
      return (   
            <div id="login">             
                <div class="container">
                    <div class="row center-align">
                        <form class="col offset-s3 s6 middle">
                            <div class="row from-back">
                                <h3 class="grey-text lighten-5">Inicia sesion</h3>
                                <div class="col s12 ">
                                    <div class="input-field inline">
                                        <input id="email" type="email" class="validate grey-text lighten-5" formControlName="email"/>
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div class="col s12">
                                    <div class="input-field inline">
                                        <input id="password" type="password" class="validate grey-text lighten-5" formControlName="password"/>
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                                <span class="helper-text red-text" >*Error en el inicio de sesion, verifique los campos</span>
                                <button class="btn waves-effect waves-light green lighten-1" type="submit">
                                Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>           
      )
    }
}