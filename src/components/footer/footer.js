import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="top">
            <p className="schedule">
                Horario de atención de lunes a viernes 9:00 am - 6:00 pm / Sabados de 9:00 am a 3:00 pm
            </p>
        </div>
        <div className="bottom">
            <div className="item">
                <img src={require('../../dist/img/cloud_icon.png')}/>
                <p className="weather">
                    25 C
                </p>
            </div>
            <div className="item">
                <img src={require('../../dist/img/calendar_icon.png')}/>
                <p className="time">
                    03/07/2019
                </p>
            </div>
            <div className="item">
                <img src={require('../../dist/img/location_icon.png')}/>
                <p className="location">
                    Avenida 29 # 22 - 50
                </p>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
