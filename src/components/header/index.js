import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div id="header">
        <img className="shadow" src={require('../../dist/img/shadow.png')}/>
        <img className="logo" src={require('../../dist/img/logo.png')}/>
        <ul className="nav">
          <li><a href="/">Past Trials</a></li>
          <li><a href="/how-it-works">How it works</a></li>
          <li><a href="/login">Login/Sign Up</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
