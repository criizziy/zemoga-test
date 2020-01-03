import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header'

class Works extends Component {

    render() {
        return (
            <div id="Works">
                <div className='col-12 p-0'>
                    <Header/>
                </div>
                <div className='col-12 p-0'>
                    <h2>How it works !</h2> 
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Works)