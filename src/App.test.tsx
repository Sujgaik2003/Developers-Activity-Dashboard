import React from 'react';
import './App.css';
import ActivityTable from './components/ActivityComponent';
import SummaryStats from './components/SummaryStats';


const App: React.FC = () => {
  return (
    <div className="app">
      <h1> My Dashboard </h1>
      <div className="charts">
      <SummaryStats />
      </div>
      <ActivityTable/>
      
      
    </div>
  );
};

export default App;
