import React from 'react';
import {Chart_pie} from '../charts/charts';
import C_chart from '../charts/c_chart';


export default class Turns extends React.Component {

  	constructor(props) {
		super(props);
		this.state = {
			data:[
				{
					type: "Excelente",
					percentaje: 50,
					value: 100
				},
				{
					type: "Bueno",
					percentaje: 20,
					value: 50
				},
				{
					type: "Regular",
					percentaje: 40,
					value: 10
				},
				{
					type: "Malo",
					percentaje: 10,
					value: 80
				},
				{
					type: "Muy malo",
					percentaje: 5,
					value: 2
				},
			]
		};
	}

  render() {
    return (
      <div className="row qualification_wrapper">
            
            <div className="col-12">
              <h2>Estadistica de calificaciones</h2>
            </div>

			

            <div className="data-box">
              <div className="item col-4">
                  <Chart_pie 
					title="Turnos atendidos por día"  
					data={this.state.data}
                  />
              </div>  
              <div className="item col-7">
                  <C_chart data={this.state.data}/>
              </div>
            </div>

      </div>
    );
  }
};