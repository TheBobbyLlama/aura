import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const data = {
    labels: ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [3, 2, 1, 2, 3, 3.2, 3.4, 2.8, 3.4, 4, 4.1, 4.3],
        fill: true,
        borderColor: 'white',
        backgroundColor: 'white',
      }
    ]
  };
  
const barOptions= {
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

  const BarChart = () => {
      return(
      <><div className='boxchart-container'>
            <h2 className='chart-title'>14</h2>
            <h5 className='chart-name'>
                Attrition Rate
            </h5>
            <div className='chart-size-container'>
                <Chart type='bar' data={data} options={barOptions} />
            </div>
          </div>
          </>
      ) 
    };

export default BarChart;