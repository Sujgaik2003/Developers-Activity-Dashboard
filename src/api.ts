// api.ts

// Import mock data from JSON file
import mockData from './data/mockData.json';

// Define the Item interface representing your data structure
export interface Item {
  date: string;
  email: string;
  commitCount: number;
  prOpenCount: number;
  prMergedCount: number;
  prReviewedCount: number;
  prCommentsCount: number;
  incidentAlertsCount: number;
  incidentsResolvedCount: number;
}

// Define the fetchData function
export const fetchData = async (): Promise<Item[]> => {
  try {
    if (!mockData || !mockData.data || !Array.isArray(mockData.data.AuthorWorklog)) {
      throw new Error("Invalid mock data format");
    }

    return mockData.data.AuthorWorklog.map((author: any) => ({
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
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array if an error occurs
  }
};
