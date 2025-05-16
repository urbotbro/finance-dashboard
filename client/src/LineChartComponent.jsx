import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChartComponent() {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Uttara Received',
        data: [7500000, 8000000, 8500000, 9000000],
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Uttara Quarterly Fund Received',
      },
    },
  };

  return (
    <div style={{ width: '600px', margin: '20px auto' }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChartComponent;
