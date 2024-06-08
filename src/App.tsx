import React from 'react';
import './style.css'; // Import CSS file for styling

import SummaryStats from './components/SummaryStats';
import ActivityComponent from './components/ActivityComponent';

const SummaryStatsComponent: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Developer Dashboard</h1>
      <div className="stats-section">
        <div className="stats-card">
          <SummaryStats />
        </div>
        <div className="activity-table">
          <ActivityComponent />
        </div>
      </div>
    </div>
  );
};

export default SummaryStatsComponent;
