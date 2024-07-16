import { getHistoryData } from "../data/historyData";

export interface Activity {
  name: string;
  iconCategory: "outdoor" | "culture" | "music";
}

export interface HistoryData {
  location: string;
  hotel: string;
  date: Date;
  activities: Activity[];
  picture: string;
}

interface HistoryFilterOptions {
  location?: string;
}

export const getHistory = ({ location }: HistoryFilterOptions) => {
  const data = getHistoryData();
  if (location) {
    const locationRegex = new RegExp(location, "i");
    return data.filter((item) => locationRegex.test(item.location));
  }

  return data;
};
