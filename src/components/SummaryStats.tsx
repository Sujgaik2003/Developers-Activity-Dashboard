import React, { useEffect, useState } from 'react';
import {fetchData} from '../utils/fetchData';

interface ActivityData {
  date: string;
  prOpenCount: number;
  prMergedCount: number;
  commitCount: number;
  prReviewedCount: number;
  prCommentsCount: number;
  incidentAlertsCount: number;
  incidentsResolvedCount: number;
}

const SummaryStats: React.FC = () => {
  const [summaryData, setSummaryData] = useState<ActivityData[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const data = await fetchData();
      setSummaryData(data);
    };
    fetchAndSetData();
  }, []);

  const totalPRsOpen = summaryData.reduce((sum, data) => sum + data.prOpenCount, 0);
  const totalPRsMerged = summaryData.reduce((sum, data) => sum + data.prMergedCount, 0);
  const totalCommits = summaryData.reduce((sum, data) => sum + data.commitCount, 0);
  const totalPRsReviewed = summaryData.reduce((sum, data) => sum + data.prReviewedCount, 0);
  const totalPRsComments = summaryData.reduce((sum, data) => sum + data.prCommentsCount, 0);
  const totalIncidentAlerts = summaryData.reduce((sum, data) => sum + data.incidentAlertsCount, 0);
  const totalIncidentsResolved = summaryData.reduce((sum, data) => sum + data.incidentsResolvedCount, 0);

  return (
    <div className="summary-stats">
      <div className="stat-card">
        <h3>Total PRs Open</h3>
        <p>{totalPRsOpen}</p>
      </div>
      <div className="stat-card">
        <h3>Total PRs Merged</h3>
        <p>{totalPRsMerged}</p>
      </div>
      <div className="stat-card">
        <h3>Total Commits</h3>
        <p>{totalCommits}</p>
      </div>
      <div className="stat-card">
        <h3>Total PRs Reviewed</h3>
        <p>{totalPRsReviewed}</p>
      </div>
      <div className="stat-card">
        <h3>Total PRs Comments</h3>
        <p>{totalPRsComments}</p>
      </div>
      <div className="stat-card">
        <h3>Total Incident Alerts</h3>
        <p>{totalIncidentAlerts}</p>
      </div>
      <div className="stat-card">
        <h3>Total Incidents Resolved</h3>
        <p>{totalIncidentsResolved}</p>
      </div>
    </div>
  );
};

export default SummaryStats;
