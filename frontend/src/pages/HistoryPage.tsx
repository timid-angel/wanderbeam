import { useEffect, useState } from "react";
import Copyright from "../components/core/Copyright";
import HistoryHeader from "../components/history_page/HistoryHeader";
import LoadingCircle from "../components/core/LoadingCircle";
import EmptyIndicator from "../components/core/EmptyIndicator";

const HistoryPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  });

  return (
    <div className="flex flex-col justify-between w-full min-h-screen">
      <div className="w-full">
        <HistoryHeader />
      </div>

      {isLoading ? (
        <LoadingCircle />
      ) : (
        <EmptyIndicator text="Your list seems to be empty..." />
      )}

      <Copyright />
    </div>
  );
};

export default HistoryPage;
