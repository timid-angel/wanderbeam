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
}

interface HistoryFilterOptions {
  location: string;
}

export const getHistory = ({ location = "" }: HistoryFilterOptions) => {
  const data = getHistoryData();
  const locationRegex = new RegExp(location);

  return data.filter((item) => locationRegex.test(item.location));
};
