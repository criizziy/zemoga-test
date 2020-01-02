import React from 'react';
import {Chart_line} from '../charts/charts';


export default class Turns extends React.Component {
  render() {
    return (
      <div className="turns_char">
        <Chart_line title="Turnos atendidos por día" />
      </div>
    );
  }
};