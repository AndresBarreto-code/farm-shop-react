import React, { Component } from 'react'
import './login.scss'
import axios from 'axios'

const loginAxios = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(event){
        this.setState({email: event.target.value, error: false});
    }

    handlePassword(event){
        this.setState({password: event.target.value, error: false});
    }

    handleSubmit(event) {
        loginAxios.get('https://farm-store-3487f.firebaseio.com/Users.json')
        .then((res) => {
            let error = true;
            Object.keys(res.data).map((key) => {
                if(res.data[key].email === this.state.email){
                    if(res.data[key].password === this.state.password) {
                        window.location.href = `${window.location.origin}/spa/catalogo`;
                        error = false;
                    }
                }
                return this.setState({error: error});
            })
        })
        .catch((err) => console.log(err));
        event.preventDefault();
    }

    render() {
      return (   
            <div id="login">             
                <div class="container">
                    <div class="row center-align">
                        <form class="col offset-s3 s6 middle" onSubmit={this.handleSubmit}>
                            <div class="row from-back">
                                <h3 class="grey-text lighten-5">Inicia sesion</h3>
                                <div class="col s12 ">
                                    <div class="input-field inline">
                                        <input id="email" type="email" class="validate grey-text lighten-5" value={this.state.email} onChange={this.handleEmail}/>
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div class="col s12">
                                    <div class="input-field inline">
                                        <input id="password" type="password" class="validate grey-text lighten-5" value={this.state.password} onChange={this.handlePassword}/>
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                                {this.state.error ? <span class="helper-text red-text">*Error en el inicio de sesion, verifique los campos</span>: null}
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