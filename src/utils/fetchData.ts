// src/api.ts
import mockData from '../data/mockData.json'; // Adjust the path as necessary

export type Item = {
  date: string;
  email: string;
  commitCount: number;
  prOpenCount: number;
  prMergedCount: number;
  prReviewedCount: number;
  prCommentsCount: number;
  incidentAlertsCount: number;
  incidentsResolvedCount: number;
};

export const fetchData = async (): Promise<Item[]> => {
  // Assuming mockData has a structure like:
  // { data: { AuthorWorklog: { activityMeta: ..., rows: ..., ... } } }
  const authorWorklog = mockData.data.AuthorWorklog;

  // Check if AuthorWorklog is an array or object
  if (Array.isArray(authorWorklog)) {
    // If it's an array, map over it
    const items: Item[] = authorWorklog.map((author: any) => ({
      date: author.activityMeta[0].label,
      email: author.rows[0].name,
      commitCount: parseInt(author.rows[0].totalActivity[0].value),
      prOpenCount: parseInt(author.rows[0].totalActivity[1].value),
      prMergedCount: parseInt(author.rows[0].totalActivity[2].value),
      prReviewedCount: parseInt(author.rows[0].totalActivity[3].value),
      prCommentsCount: parseInt(author.rows[0].totalActivity[4].value),
      incidentAlertsCount: parseInt(author.rows[0].totalActivity[5].value),
      incidentsResolvedCount: parseInt(author.rows[0].totalActivity[6].value),
    }));

    return items;
  } else {
    // If it's not an array, handle it accordingly
    // Example:
    const author = authorWorklog;
    return [{
      date: author.activityMeta[0].label,
      email: author.rows[0].name,
      commitCount: parseInt(author.rows[0].totalActivity[0].value),
      prOpenCount: parseInt(author.rows[0].totalActivity[1].value),
      prMergedCount: parseInt(author.rows[0].totalActivity[2].value),
      prReviewedCount: parseInt(author.rows[0].totalActivity[3].value),
      prCommentsCount: parseInt(author.rows[0].totalActivity[4].value),
      incidentAlertsCount: parseInt(author.rows[0].totalActivity[5].value),
      incidentsResolvedCount: parseInt(author.rows[0].totalActivity[6].value),
    }];
  }
};
