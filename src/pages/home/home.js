import React, { Component } from 'react';
import {actGetRulings} from '../../actions/content';
import {connect} from 'react-redux';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Banner from '../../components/banner'
import RulingBox from '../../components/rulingBox'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {
    }

    render() {
        return (
            <div className='container-fluid p-0'>
                <div className='row m-0'>

                    <div className='col-12 p-0'>
                        <Header/>
                    </div>
                    <div className='col-12 p-0'>
                        <Banner/>
                        <div className="content_wrapper">
                            <div className="speaker">
                                <h2 className="speaker__title">
                                    Speak out. Be heard. 
                                    <strong>Be counted</strong>
                                </h2>
                                <p className="speaker__txt">
                                    Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
                                </p>
                                <button className="speaker__close">x</button>
                            </div>

                            <h2 className="title">Previous Rulings</h2>
                            <RulingBox />

                            <div className="submit_name">
                                <p>Is there anyone else you would want us to add?</p>
                                <button>Submit a Name</button>
                            </div>
                            
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

function mapStateToProps(state) {
    console.log(state)
    return {
      user: state.login.user,
      isFetching: state.login.isFetching,
    }
  }
  
  
export default connect(mapStateToProps, null)(Home)

