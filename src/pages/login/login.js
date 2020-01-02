import React, { Component } from 'react';
import {actLogin} from '../../actions/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    async login() {
        let { dispatch } = this.props
        let action = actLogin({
            'username': this.state.username,
            'password': this.state.password
        });
        dispatch(action)
    }

    render() {
        return (
            <div id="login" className="container-fluid">
                <div className="row">
                    <div className="col-5">
                        <div className="wrapper_form">
                            <h2>Bienvenido <br/>a tu cuenta</h2>
                            <form>
                                <input 
                                    value={this.state.username} 
                                    onChange={(v) => this.setState({username: v.target.value})}
                                    type="email" 
                                    placeholder="Correo electrónico" 
                                    required
                                />
                                <input 
                                    value={this.state.password} 
                                    onChange={(v) => this.setState({password: v.target.value})}
                                    type="password" 
                                    placeholder="Contraseña" 
                                    required
                                />
                                <button 
                                    type="button"
                                    onClick={ () => this.login() }
                                >
                                    Entrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default connect(null, null)(Login)