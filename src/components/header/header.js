import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={require('../../dist/img/logo.png')}/>
        <div className="wrapper_clock">
          <div className="clock">
            <img className="icon" src={require('../../dist/img/clock_icon.png')}/>
            <p className="time">12:15 am</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
