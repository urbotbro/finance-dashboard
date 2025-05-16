import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChartComponent() {
  const data = {
    labels: ['Mirpur', 'Uttara', 'Rampura'],
    datasets: [
      {
        label: 'Remaining Plan',
        data: [199770021, 0, 0], // Example: Uttara, Rampura data missing in your sheet
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
        text: 'Remaining Plan (Amount)',
      },
    },
  };

  return (
    <div style={{ width: '600px', margin: '20px auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartComponent;
