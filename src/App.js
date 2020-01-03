import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './dist/css/main.css';
import Home from './pages/home/home';
import {actGetRulings} from './actions/content';
import {connect} from 'react-redux';
import Loading from './components/loading';

class App extends Component {

  constructor(props) {
    super(props)
  }

  async componentDidMount(){
    await this.props.actGetRulings();
  }

  render() {
    if(!this.props.isFetching)
      return <Home/>;
    else
      return <Loading/>
  }

}

function mapStateToProps(state) {
  console.log(state)
  return {
    user: state.login.user,
    isFetching: state.rulings.isFetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actGetRulings: () => {
      dispatch(actGetRulings(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
