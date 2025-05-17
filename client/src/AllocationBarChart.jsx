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

function AllocationBarChart() {
  const data = {
    labels: ['Mirpur', 'Uttara'],
    datasets: [
      {
        label: 'Allocated',
        data: [230970021, 38000000],
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Received',
        data: [31200000, 33000000],
        backgroundColor: '#4CAF50',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Allocated vs Received' },
    },
  };

  return (
    <div style={{ width: '600px', margin: '40px auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default AllocationBarChart;
