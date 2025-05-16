import React, { useState } from 'react';
import PieChartComponent from './PieChartComponent';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';
import ManualEntryForm from './ManualEntryForm';
import FlowChartComponent from './FlowChartComponent';

function App() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>📊 Finance Dashboard Demo</h1>
      <PieChartComponent />
      <BarChartComponent />
      <LineChartComponent />
      <ManualEntryForm onAddEntry={handleAddEntry} />
      <FlowChartComponent entries={entries} />
    </div>
  );
}

export default App;
