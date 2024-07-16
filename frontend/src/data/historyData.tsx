import { faker } from "@faker-js/faker";
import { activityData } from "./activityData";
import { HistoryData } from "../API/history";

const generateHistoryInstance = () => {
  const data: HistoryData = {
    location: faker.location.city(),
    hotel: faker.company.name(),
    date: faker.date.between({
      from: "2019-01-01T00:00:00.000Z",
      to: "2024-07-07T00:00:00.000Z",
    }),
    activities: [1, 2, 3, 4, 5].map(
      () => activityData[Math.floor(Math.random() * activityData.length)]
    ),
  };

  return data;
};

export const getHistoryData = () => {
  if (historyData.length > 0) {
    return historyData;
  }

  for (let i = 0; i < 10; i++) historyData.push(generateHistoryInstance());
  return historyData;
};

const historyData: HistoryData[] = [];
