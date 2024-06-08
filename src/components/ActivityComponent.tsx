import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

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

const ActivityTable: React.FC = () => {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const data = await fetchData();
      setActivityData(data);
    };
    fetchAndSetData();
  }, []);

  return (
    <div className="activity-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>PRs Open</th>
            <th>PRs Merged</th>
            <th>Commits</th>
            <th>PRs Reviewed</th>
            <th>PRs Comments</th>
            <th>Incident Alerts</th>
            <th>Incidents Resolved</th>
          </tr>
        </thead>
        <tbody>
          {activityData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.prOpenCount}</td>
              <td>{data.prMergedCount}</td>
              <td>{data.commitCount}</td>
              <td>{data.prReviewedCount}</td>
              <td>{data.prCommentsCount}</td>
              <td>{data.incidentAlertsCount}</td>
              <td>{data.incidentsResolvedCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
