import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer__nav">
            <li><a>Terms and conditions</a></li>
            <li><a>Privacy Policy</a></li>
            <li><a>Contact Us</a></li>
        </ul>
        <ul className="footer__social_networks">
            <li>follow us</li>
            <li><a><img src={require('../../dist/img/icon_fb.png')}/></a></li>
            <li><a><img src={require('../../dist/img/icon_tw.png')}/></a></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
