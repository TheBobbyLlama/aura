import React from 'react';
import './chart.css';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const data = {
    labels: ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [4, 3, 4, 5, 4, 5.5, 6, 7, 8, 7, 7.8, 8],
        fill: true,
        borderColor: 'white',
        backgroundColor: '#A9EEE3',
        pointRadius: 3,
        pointStyle: 'circle',
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
      }
    ]
  };
  
const areaOptions= {
    plugins:{
        legend: { display: false }},
    scales: {
        yAxes : {
            display: false,
            ticks: { display:  false},
            gridLines: {display: false},
        },
        xAxes : {
            display: false,
            scaleLabel: { display: false},
            ticks: { display:  false},
            gridLines: { display: false}
        },
    },
}

  const AreaChart = () => {
      return(
      <><div className='areachart-container'>
            <h2 className='chart-title'>100</h2>
            <h5 className='chart-name'>
                Total New Hires
            </h5>
            <div className='chart-size-container'>
                <Chart type='line' data={data} options={areaOptions} />
            </div>
          </div>
          </>
      ) 
    };

export default AreaChart;