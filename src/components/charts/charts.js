import React from 'react';
import {Line, Doughnut} from 'react-chartjs-2';


export function Chart_line(props) {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Turns',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(17,15,100,1)',
            borderColor: 'rgba(17,15,100,1)', 
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(238,130,73,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(17,15,100,1)',
            pointHoverBorderColor: 'rgba(238,130,73,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
    };
    return (
      <div className="turns_char">
        <h2>{props.title}</h2>
        <Line width={window.innerHeight*0.45} data={data} />
      </div>
    )
  
};


export function Chart_pie(props) {

    const values = [],
        labels = [];
    var total=0;

    props.data.map((val, i)=>{
        values.push(val.value);
        labels.push(val.type);
        total += val.value;
    })

    const data = {
        labels: labels,
          datasets: [{
            data: values,
            "borderWidth": 1,
            backgroundColor: [
                '#ffc000',
                '#ff8c00',
                '#ff294c',
                '#0095ff',
                '#00ce99'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    return (
        <div className="chart_qualification">
            <Doughnut 
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        "display": false
                    },
                }}
                data={data} 
                width={"100%"}
                height={"100%"}
            />
            <p className="total_q">{total} <span></span>Calificaciones</p>
        </div>
    );
};