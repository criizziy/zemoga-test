import React, { Component } from 'react';


class Box extends Component {
  render() {
    return (
        <div className="data-box">
            <div class="item">
                <p>Turnos atendidos</p>
                <h2>235</h2>
                <span>Total turnos</span>
                <p className="less">-35%</p>
            </div>
            <div class="item">
                <p>Calificaciones</p>
                <h2>526</h2>
                <span>Total calificaciones</span>
                <p className="more">+55%</p>
            </div>
        </div>
    );
  }
}

export default Box;
