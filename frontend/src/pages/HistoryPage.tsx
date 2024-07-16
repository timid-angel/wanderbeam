import { useEffect, useState } from "react";
import Copyright from "../components/core/Copyright";
import HistoryHeader from "../components/history_page/HistoryHeader";
import LoadingCircle from "../components/core/LoadingCircle";
import EmptyIndicator from "../components/core/EmptyIndicator";
import { getHistory, HistoryData } from "../API/history";
import SummaryCard from "../components/history_page/SummaryCard";
import { FaSearch } from "react-icons/fa";

const HistoryPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<HistoryData[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData(getHistory({}));
    }, 2500);
  }, []);

  const getSummaryCards = () => {
    return data.map((item, index) =>
      new RegExp(query, "i").test(item.location) ? (
        <SummaryCard
          key={index}
          activities={item.activities}
          date={item.date}
          hotel={item.hotel}
          location={item.location}
          picture={item.picture}
        />
      ) : null
    );
  };

  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen">
      <div className="w-full">
        <HistoryHeader />
      </div>

      {isLoading ? (
        <LoadingCircle />
      ) : data?.length === 0 ? (
        <EmptyIndicator text="Your list seems to be empty..." />
      ) : (
        <div className="flex flex-col justify-between h-full flex-grow">
          <div className="pt-6 pb-10 flex gap-2 items-center justify-center w-full">
            <FaSearch size={20} color="rgb(71 85 105)" />
            <input
              type="text"
              onChange={(e) => {
                const query: string = e.target.value || "";
                setQuery(query);
              }}
              placeholder="Search by location"
              className="focus:outline-none border-slate-500 border-2 rounded-full px-4 w-[450px] py-2 text-lg text-slate-600"
            />
          </div>

          {(() => {
            const cards = getSummaryCards().filter((item) => item);
            return cards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-8 xl:gap-x-16 gap-y-10 justify-center max-w-[1400px] flex-grow pb-5">
                {cards}
              </div>
            ) : (
              <div className="flex flex-grow justify-center items-center mb-20">
                <EmptyIndicator text="No itineraries found..." />
              </div>
            );
          })()}
        </div>
      )}

      <Copyright />
    </div>
  );
};

export default HistoryPage;
