import React from 'react';
import { Bar } from 'react-chartjs-2';

function FlowChartComponent({ entries }) {
  const totals = {};

  entries.forEach(({ from, to, amount }) => {
    const key = `${from} → ${to}`;
    totals[key] = (totals[key] || 0) + amount;
  });

  const labels = Object.keys(totals);
  const data = Object.values(totals);

  return (
    <div style={{ width: '600px', margin: '30px auto' }}>
      <h3>💸 Fund Flow Comparison</h3>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Transferred Amount',
              data,
              backgroundColor: '#4caf50',
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' },
          },
        }}
      />
    </div>
  );
}

export default FlowChartComponent;
