import React, { Component } from 'react';
import Header from '../../components/header'

class Login extends Component {


    render() {
        return (
            <div id="login">
                <div className='col-12 p-0'>
                    <Header/>
                </div>
                <div className='col-12 p-0'>
                    <h2 className="center_txt">login</h2>
                </div>
            </div>
        );
    }
}

export default Login