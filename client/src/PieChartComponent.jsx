import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartComponent() {
  const data = {
    labels: ['Mirpur', 'Uttara', 'Rampura'],
    datasets: [
      {
        label: 'Alt Given',
        data: [31200000, 8000000, 2000000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '400px', margin: '20px auto' }}>
      <h2 style={{ textAlign: 'center' }}>Alt Given (Amount)</h2>
      <Pie data={data} />
    </div>
  );
}

export default PieChartComponent;
