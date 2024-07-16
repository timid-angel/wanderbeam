import { useEffect, useState } from "react";
import Copyright from "../components/core/Copyright";
import HistoryHeader from "../components/history_page/HistoryHeader";
import LoadingCircle from "../components/core/LoadingCircle";
import EmptyIndicator from "../components/core/EmptyIndicator";
import { getHistory, HistoryData } from "../API/history";
import SummaryCard from "../components/history_page/SummaryCard";

const HistoryPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<HistoryData[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData(getHistory({}));
    }, 2500);
  });

  return (
    <div className="flex flex-col justify-between w-full min-h-screen">
      <div className="w-full">
        <HistoryHeader />
      </div>

      {isLoading ? (
        <LoadingCircle />
      ) : data?.length === 0 ? (
        <EmptyIndicator text="Your list seems to be empty..." />
      ) : (
        data.map((item, index) => (
          <SummaryCard
            key={index}
            activities={item.activities}
            date={item.date}
            hotel={item.hotel}
            location={item.location}
            picture={item.picture}
          />
        ))
      )}

      <Copyright />
    </div>
  );
};

export default HistoryPage;
