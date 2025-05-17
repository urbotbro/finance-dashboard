import React from 'react';
import PieChartComponent from './PieChartComponent';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';
import ManualEntryForm from './ManualEntryForm';
import FlowChartComponent from './FlowChartComponent';
import AreaSummary from './AreaSummary';
import AllocationBarChart from './AllocationBarChart';

function App() {
  const [entries, setEntries] = React.useState([]);

  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>📊 Finance Dashboard Demo</h1>
      <PieChartComponent />
      <BarChartComponent />
      <LineChartComponent />
      <AreaSummary />
      <AllocationBarChart />
      <ManualEntryForm onAddEntry={handleAddEntry} />
      <FlowChartComponent entries={entries} />
    </div>
  );
}

export default App;
