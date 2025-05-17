import React from 'react';

function AreaSummary() {
  const data = [
    { area: 'Mirpur', allocated: 230970021, received: 31200000 },
    { area: 'Uttara', allocated: 38000000, received: 33000000 },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h3>📋 Area Allocation Summary</h3>
      <ul>
        {data.map((item) => (
          <li key={item.area}>
            <strong>{item.area}</strong> → Allocated: {item.allocated.toLocaleString()} |
            Received: {item.received.toLocaleString()} |
            Pending: {(item.allocated - item.received).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AreaSummary;
