import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const data = {
    labels: ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [25, 33, 25, 35, 26, 23, 28, 37, 34, 27, 25, 40],
        fill: false,
        borderColor: 'white',
        backgroundColor: 'cornflowerblue',
        pointRadius: 3,
        pointStyle: 'circle',
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
      }
    ]
  };
  
const lineOptions= {
  plugins:{
    legend: { display: false }},
  scales: {
      y : {
          display: false,
          ticks: { display:  false},
          gridLines: {display: false},
      },
      x : {
          display: false,
          scaleLabel: { display: false},
          ticks: { display:  false},
          gridLines: { display: false}
      },
  },
}

  const LineChart = () => {
      return(
      <><div className='linechart-container'>
            <h2 className='chart-title'>350</h2>
            <h5 className='chart-name'>
                Total Active Employees
            </h5>
            <div className='chart-size-container'>
                <Chart type='line' data={data} options={lineOptions} />
            </div>
          </div>
          </>
      ) 
    };

export default LineChart;