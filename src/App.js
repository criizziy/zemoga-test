import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './dist/css/main.css';
import Home from './pages/home';
import Work from './pages/works';
import Login from './pages/login';
import {actGetTrials} from './actions/content';
import {connect} from 'react-redux';
import Loading from './components/loading';
import { BrowserRouter as Router, Switch, Route, Link } from"react-router-dom";

class App extends Component {

  constructor(props) {
    super(props)
  }

  async componentDidMount(){
    await this.props.actGetTrials();
  }

  render() {
    if(!this.props.isFetching){
      return (
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/how-it-works" component={Work}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Router>
      )
      
    }else
      return <Loading/>
  }

}

function mapStateToProps(state) {
  console.log(state)
  return {
    user: state.login.user,
    isFetching: state.trials.isFetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actGetTrials: () => {
      dispatch(actGetTrials(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
